import { Message } from "discord.js";
import { Prefix } from './config.json';
import CommandHandler from "./models/CommandHandler.js";

export function MessageListener(msg: Message): void {
    // Ignore messages that do not start with the prefix
    if (!msg.content.includes(Prefix)) return;
    // Ignore partial messages and bots
    if (!(msg instanceof Message)) return;
    if (msg.author.bot) return;

    // General parsing
    let commandStr = msg.content.split(Prefix)[1];

    let args: string[] | undefined;
    if (commandStr.includes(' ')) {
        const splitCommandStr = commandStr.split(' ');
        commandStr = splitCommandStr[0];
        splitCommandStr.shift();
        args = splitCommandStr;
    }

    const command = CommandHandler.getCommand(commandStr.toLowerCase());
    if (!command) return;

    if (command.parser) args = command.parser(commandStr);

    command.execute(msg, args);
}