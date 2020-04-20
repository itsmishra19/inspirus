exports.run = function (client, msg, args) {
    
  let commands = Array.from(client.commands.keys()).sort().join(', ');
  console.log(commands);
  
    msg.channel.createMessage({embed: {
        color: client.config.colors.success,
        title: `Commands for ${client.user.username}`,
        description: `\`${commands}\``
    }});
};

exports.aliases = ["pong"];