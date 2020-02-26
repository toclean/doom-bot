import { Command } from "./Command";
import { Message } from "discord.js";

export default class Leave extends Command {
    help = 'leaves the current voice channel';

    constructor() {
        super();
    }

    execute(msg: Message): void {
        const member = msg.member;
        if (!member) return;

        const channel = member.voice.channel;
        if (!channel) return;

        channel.leave();
    }
}