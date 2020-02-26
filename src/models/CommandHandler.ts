import { Command } from "./commands/Command";
import Ping from "./commands/Ping";
import Help from "./commands/Help";
import Search from "./commands/Search";
import Play from "./commands/Play";
import Join from "./commands/Join";
import Leave from "./commands/Leave";

export default class CommandHandler {
    static commands: Record<string, Command> = {
        'ping': new Ping(),
        'help': new Help(),
        'search': new Search(),
        'play': new Play(),
        'join': new Join(),
        'leave': new Leave(),
    };

    static getCommand(str: string): Command {
        return CommandHandler.commands[str];
    }

    static getHelp(): string[] {
        // Array is loaded with one element to make help go to next line
        const help: string[] = [''];

        Object.keys(CommandHandler.commands).forEach((commandStr) => {
            const command = CommandHandler.commands[commandStr];
            help.push(`${command.name} - ${command.help}`);
        });

        return help;
    }
}