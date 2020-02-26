import { Command } from "./Command";
import { Message } from "discord.js";
import Store from "../Store";
import ytdl from 'ytdl-core';

// Sudo command hide from the help
export default class Play extends Command {
    help = '';

    execute(msg: Message, args: string[]): void {
        if (!msg.guild) return;
        Store.chooseSearch(msg.guild.id, parseInt(args[0]) - 1);

        const link = Store.pop(msg.guild.id);
        if (!link) return;

        const stream = ytdl(link, { filter: 'audioonly', highWaterMark: 1<<25 });
        const dispatcher = msg.client.voice?.connections.get(msg.guild.id)?.play(stream);
        
        dispatcher?.on('start', () => {
            msg.reply('Now playing: ' + link);
        });

        dispatcher?.on('end', () => {

        });
    }
}