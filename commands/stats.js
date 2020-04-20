const { VERSION } = require('eris');

exports.run = async function (client, msg, args) {
  
    let wsPING = client.shards.get(0).latency;
  
    let findOwner = client.config.ownerID[0]; //to get your owner name put your ID at index 0 in config
  
    let getOwner = client.users.get(findOwner);

    let owner = `${getOwner.username}#${getOwner.discriminator}`;
  
    msg.channel.createMessage({embed: {
color: client.config.colors.success,
thumbnail: { 
url: client.user.avatarURL 
 },
description: `
• Created By: ${client.util.codeBlock(owner)}
• Ping: ${client.util.codeBlock(wsPING+'ms')}
• Uptime: ${client.util.codeBlock(client.util.timeParser(client.uptime))}
• Total Guilds: ${client.util.codeBlock(client.guilds.size)}
• Total Users: ${client.util.codeBlock(client.users.size)}
• Eris Version: ${client.util.codeBlock(VERSION)} 
• Node Version: ${client.util.codeBlock(process.version)}
• RAM Usage: ${client.util.codeBlock((process.memoryUsage().rss / 1024 / 1024).toFixed(2)+'MB')}
`
    }});
};

exports.aliases = ['stat'];