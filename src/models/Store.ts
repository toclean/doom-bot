export default class Store {
    private static searches: Record<string, string[]> = {};
    private static store: Record<string, string[]> = {};

    static addSearches(key: string, value: string[]): void {
        Store.searches[key] = value;
    }

    static chooseSearch(key: string, value: number): void {
        const searches = Store.searches[key];
        Store.add(key, searches[value]);
        Store.searches[key] = [];
    }

    static add(key: string, value: string): void {
        const entry = Store.store[key];
        if (entry) {
            entry.push(value);
        } else {
            Store.store[key] = [value];
        }
    }

    static pop(key: string): string | undefined {
        const entry = Store.store[key];
        if (entry) {
            return entry.pop();
        }

        return undefined;
    }
}