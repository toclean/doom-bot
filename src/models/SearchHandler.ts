import search, { YouTubeSearchResults, YouTubeSearchPageResults } from 'youtube-search';
import { YoutubeAPIKey } from '../config.json';

export default class SearchHandler {
    static searchYoutube(term: string): Promise<{ results: YouTubeSearchResults[]; pageInfo: YouTubeSearchPageResults; }> {
        return search(term, {
            maxResults: 3,
            key: YoutubeAPIKey,
        });
    }
}