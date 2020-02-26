import { Command } from "./Command";
import { Message } from "discord.js";
import SearchHandler from "../SearchHandler";
import Store from "../Store";

export default class Search extends Command {
    help = 'searches youtube via search terms';

    constructor() {
        super();
    }

    execute(msg: Message, args: string[]): void {
        // msg.reply('calling search with: ' + args);
        SearchHandler.searchYoutube(args.join(' ')).then((results) => {
            if (!msg.guild) return;
            const searchResults = results.results;
            Store.addSearches(msg.guild.id, searchResults.map((x) => x.link));
            msg.reply(searchResults.map((x) => [x.title, x.channelTitle]));
        });
    }
}