import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { VerbInterface } from '@models/verb.model';

@Injectable({
    providedIn: 'root'
})
export class SearchVersService {

    private apiUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }


    public getVerbDefinition(verb: string): Observable<VerbInterface> {
        return this.http.get<VerbInterface>(`${this.apiUrl}/conjugate?verb=${verb}`);
    }
}
