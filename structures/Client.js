const { Client, Collection } = require('eris');
const { readdir, readdirSync } = require('fs');
class ErisBot extends Client {

    constructor(config, clientOptions) {

        super(config.TOKEN, clientOptions);

        this.config = config;
        this.util = require('./util.js');
        this.commands = new Collection();
        this.aliases = new Collection();
        this._loadCommands();
        this._eventLoader(this);
        this.fetch = require('axios');
    };

    _loadCommands() {
        readdir(`${process.cwd()}/commands/`, (err, files) => {
            if (err) {
                return console.log('ERROR', 'Unable to index "commands"', err);
            }

            files.forEach(file => {
                try {
                    const command = require(`${process.cwd()}/commands/${file}`);
                    const name = file.replace('.js', '').toLowerCase();
                    this.commands.set(name, command);

                    if (command.aliases) {
                        for (const alias of command.aliases) {
                            this.aliases.set(alias, name);
                        }
                    }
                } catch(e) {
                    console.log('ERROR', `Failed to load command "${file}"`, e.message, e.stack);
                }
            });
        });
    }
   
  _eventLoader(client) {
  const events = readdirSync("./events/");
  for (const event of events) {
    const file = require(`../events/${event}`);
    client.on(event.split(".")[0], (...args) => file(client, ...args));
  }
  }

}

module.exports = ErisBot;