module.exports = async client => {
    console.log(`${client.user.username} is ready now!`);
    client.editStatus({name: "Wooh! I'm streaming", type: 1, url: "https://twitch.tv/hydrox127"});
};

