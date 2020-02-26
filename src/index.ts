import Discord from 'discord.js';

import { BotToken } from './config.json';
import { MessageListener } from './Listeners.js';

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user ? client.user.tag : ' a User'}`);
});

// This can actually be a partial message but...
// Meaning it is possible that the message is null
// but even after null checking it we have issues
client.on('message', MessageListener);

client.login(BotToken);