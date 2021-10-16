import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    private readonly localStorageKey = 'verbs';
    private savedWords$ = new BehaviorSubject<string[]>([]);
    readonly currentSavedWords$ = this.savedWords$.asObservable();

    get key(): string {
        return this.localStorageKey;
    }

    get savedVerbs(): string[] {
        const items = localStorage.getItem(this.key);

        if (!items) {
            return [];
        }

        return JSON.parse(localStorage.getItem(this.key));
    }

    constructor() {
        this.savedWords$.next(this.savedVerbs);
    }

    public saveToTheFavorites(verb: string): void {
        const items = [...this.savedVerbs, verb];
        localStorage.setItem(this.key, JSON.stringify(items));
        this.savedWords$.next(items);
    }

    public removeFromFavorites(verb: string): void {
        const items = this.savedVerbs.filter(i => i !== verb);
        localStorage.setItem(this.key, JSON.stringify(items));
        this.savedWords$.next(items);
    }
}
