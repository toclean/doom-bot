import { Message } from "discord.js";
import { Command } from "./Command";

export default class Join extends Command {
    help = 'joins the voice channel';

    constructor() {
        super();
    }

    execute(msg: Message): void {
        const member = msg.member;
        if (!member) return;

        const channel = member.voice.channel;
        if (!channel) return;

        if (msg.client.voice) {
            const alreadyInChannel = msg.client.voice.connections.some((x) => x.channel.id === channel.id);
            if (alreadyInChannel) {
                msg.reply('Already connected to ' + channel.name);
                return;
            }
        }

        channel.join().then((value) => {
            msg.reply('Joined ' + value.channel.name);
        });
    }
}