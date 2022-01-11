import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WordDefinitionInterface } from '@models/dictionary/word-definition.interface';
import { catchError, tap } from 'rxjs/operators';
import { SearchWordService } from '@services/search-word.service';

@Injectable({
    providedIn: 'root'
})
export class DictionaryService {

    private apiUrl = environment.dictionaryUrl;

    constructor(
        private http: HttpClient,
        private searchWordService: SearchWordService
    ) { }

    public getWordDefinition(word: string): Observable<WordDefinitionInterface[]> {
        this.searchWordService.lastTypedWord = word;
        return this.http.get<WordDefinitionInterface[]>(`${this.apiUrl}/${word.toLowerCase()}`).pipe(
            catchError(() => of(null)),
            tap(response => this.searchWordService.isEmptyResponse$.next(Boolean(response)))
        );
    }
}
