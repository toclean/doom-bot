import { Message } from "discord.js";

export interface Command {
    parser?(str: string): string[] | undefined;
}

export abstract class Command {
    name: string;
    abstract help: string;
    abstract execute(msg: Message, args?: string[]): void;

    constructor() {
        this.name = this.constructor.name;
    }
}