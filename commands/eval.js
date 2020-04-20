exports.run = async (client, msg, args) => {
  const owners = client.config.ownerID.forEach(async(owner) => {
    
    if (msg.author.id !== owner) return;

     try {
        let code = eval(args.join(' '));

        if (typeof code !== 'string') {
            code = require('util').inspect(code, { depth: 0 });
        }
        let output = client.util.clean(code);
        output = output.replace(new RegExp(client.token.slice(3), 'gi'), 'GG! You hungry?');
       if(code.length > 1023) {
       let res = await client.util.haste(output);
       msg.channel.createMessage({embed:{
        color: client.config.colors.success,
        description: res
      }});
       } else {
        msg.channel.createMessage({embed:{
        color: client.config.colors.success,
        description: client.util.codeBlock(output, "js"),
        fields: [
        { name: "Type", value: client.util.codeBlock(typeof output) } 
        ]
        }});
       }
    } catch(e) {
        msg.channel.createMessage({embed: {color: client.config.colors.error, description: client.util.codeBlock(e)}});
    }
  });
}

exports.aliases = ['ev']