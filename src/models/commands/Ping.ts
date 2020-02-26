import { Command } from "./Command";
import { Message } from "discord.js";

export default class Ping extends Command {
    help = 'pong!';

    constructor() {
        super();
    }

    execute(msg: Message): void {
        msg.reply('Pong!');
    }
}