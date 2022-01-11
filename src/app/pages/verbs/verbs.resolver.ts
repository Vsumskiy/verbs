import { Injectable } from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { VerbInterface } from '@models/verb.model';
import { SearchWordService } from '@services/search-word.service';
import { SearchVerbsService } from '@services/search-verbs.service';

@Injectable()
export class VerbsResolver implements Resolve<VerbInterface> {

    constructor(
        private searchWordService: SearchWordService,
        private searchVerbService: SearchVerbsService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VerbInterface> {
        return this.searchVerbService.getVerbDefinition(this.searchWordService.lastTypedWord);
    }
}
