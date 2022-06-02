const { Client, Intents } = require('discord.js');
const config  = require('./config/config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready',() =>{
    console.log('Le BOT à démarré');
});

client.on('interactionCreate', async interaction =>{
    if(!interaction.isCommand()){
        return;
    }

    const { commandName } = interaction;

    if(commandName === 'test'){
        await interaction.reply('Salut toi');
    }
});

client.login(config.token);