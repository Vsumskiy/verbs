import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, Subject } from 'rxjs';
import { VerbInterface } from '@models/verb.model';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SearchVerbsService {

    public isEmptyResponse$: Subject<boolean> = new Subject<boolean>();
    private readonly apiUrl = environment.apiUrl;

    public lastTypedWord = 'do';

    constructor(
        private http: HttpClient
    ) { }

    public getVerbDefinition(verb: string): Observable<VerbInterface> {
        this.lastTypedWord = verb;
        return this.http.get<VerbInterface>(`${this.apiUrl}/conjugate?verb=${verb}`).pipe(
            tap(response => this.isEmptyResponse$.next(Boolean(response.conjugated_forms)))
        );
    }
}
