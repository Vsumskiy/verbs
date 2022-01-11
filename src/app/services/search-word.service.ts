import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchWordService {

    public lastTypedWord = 'do';
    public isEmptyResponse$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    constructor() { }
}
