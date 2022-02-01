import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { VerbInterface } from '@models/verbs/verb.model';
import { tap } from 'rxjs/operators';
import { SearchWordService } from '@services/search-word.service';

@Injectable({
    providedIn: 'root'
})
export class SearchVerbsService {

    private readonly apiUrl = environment.verbsUrl;

    constructor(
        private http: HttpClient,
        private searchWordService: SearchWordService
    ) { }

    public getVerbDefinition(verb: string): Observable<VerbInterface> {
        this.searchWordService.lastTypedWord = verb;
        return this.http.get<VerbInterface>(`${this.apiUrl}/conjugate?verb=${verb}`).pipe(
            tap(response => this.searchWordService.isEmptyResponse$.next(Boolean(response.conjugated_forms)))
        );
    }
}
