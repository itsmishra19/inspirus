module.exports = async (client, msg) => {
    if(msg.channel.type == 1 || msg.author.bot || msg.member && msg.member.isBlocked) return;
    if (!msg.content.startsWith(client.config.PREFIX)) return;
    
    let [command, ...args] = msg.content.slice(client.config.PREFIX.length).split(' '); // eslint-disable-line

    if (client.aliases.has(command)) {
        command = client.aliases.get(command);
    }

    if (!client.commands.has(command)) {
        return;
    }

    try {
        await client.commands.get(command).run( client, msg, args );
    } catch(e) {
        msg.channel.createMessage({ embed: {
            color: 0xFFD100,
            title: `${command} Failed to run!`,
            description: 'The error has been reported.'
        } });
        console.log('ERROR', e.message, e.stack.split('\n'));
    }

};