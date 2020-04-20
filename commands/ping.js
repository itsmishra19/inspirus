exports.run = function (client, msg, args) {
    let wsPING = client.shards.get(0).latency;

    msg.channel.createMessage({embed: {
        color: client.config.colors.success,
        description: `My ping is ${wsPING}ms`
    }});
};

exports.aliases = ["pong"];