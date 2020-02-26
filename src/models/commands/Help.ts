import { Command } from "./Command";
import { Message } from "discord.js";
import CommandHandler from "../CommandHandler";

export default class Help extends Command {
    help = 'shows this help';

    constructor() {
        super();
    }

    execute(msg: Message): void {
        msg.reply(CommandHandler.getHelp());
    }
}