require("dotenv").config();
const ErisClient = require('./structures/Client.js');

const client = new ErisClient(require('./config.js'), {
maxShards: 'auto',
messageLimit: 0,
getAllUsers: false,
disableEveryone: true
});

client.connect();