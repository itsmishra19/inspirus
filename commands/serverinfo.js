exports.run = function (client, msg, args) {
		let guild = msg.channel.guild;
		let botCount = guild.members.filter(member => member.user.bot).length;
		let owner = guild.members.get(guild.ownerID).user;
  
    msg.channel.createMessage({embed: {
        color: client.config.colors.success,
        description: `
Name: ${guild.name} ID: (${guild.id})
Owner: ${owner.username}#${owner.discriminator} ID: (${owner.id})

Channels: ${guild.channels.size}
Members: ${guild.memberCount}
Users: ${guild.memberCount - botCount}
Bots: ${botCount}
Created: ${client.util.formatDate(guild.createdAt)}
`
    }});
};

exports.aliases = ["si"];
