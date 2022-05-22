const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config/config.json')

const commands = [
    new SlashCommandBuilder().setName('test').setDescription('Replies with a string !')
]
.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(config.token);

rest.put(Routes.applicationGuildCommands(config.id.clientId,config.id.guildId),{body: commands})
    .then(() => console.log('Ajout des commandes avec succès !'))
    .catch(console.error);