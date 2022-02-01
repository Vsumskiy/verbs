import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RandomWordInterface} from '@models/random-words/random-word.interface';
import {environment} from '@environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RandomWordsService {

    public randomWordsCollection: RandomWordInterface[] = [];

    private readonly apiUrl = environment.randomWordsUrl;

    constructor(
        private http: HttpClient
    ) { }

    public getRandomWod(): Observable<RandomWordInterface> {
        return this.http.get<RandomWordInterface[]>(this.apiUrl).pipe(
            map(([word]: RandomWordInterface[]) => word),
            tap(word => this.randomWordsCollection = [...this.randomWordsCollection, word])
        );
    }
}
