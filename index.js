const { Client, Intents } = require('discord.js');
const config  = require('./config/config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready',() =>{
    console.log('Le BOT à démarré');
})

client.login(config.token);