import Discord from 'discord.js';

import { BotToken } from './config.json';

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user ? client.user.tag : ' a User'}`);
});

// This can actually be a partial message but...
// Meaning it is possible that the message is null
// but even after null checking it we have issues
client.on('message', (msg) => {
  if (!msg || (msg.author && msg.author.bot)) return;
  if (!(msg instanceof Discord.Message)) return;

  msg.reply('test');
});

client.login(BotToken);