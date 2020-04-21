exports.run = function (client, msg, args) {
    
		let user = msg.mentions[0] || msg.author;
		let member = msg.channel.guild.members.get(user.id);
    msg.channel.createMessage({embed: {
        color: client.config.colors.success,
        description: `
Name: ${user.username}#${user.discriminator} ID (${user.id})
Game: ${member.game ? member.game.name : "None"}
Created: ${client.util.formatDate(user.createdAt)}
Joined: ${client.util.formatDate(member.joinedAt)}
`
    }});
};

exports.aliases = ['ui'];
