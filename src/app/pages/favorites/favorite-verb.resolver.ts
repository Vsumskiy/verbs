import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchVerbsService } from '@services/search-verbs.service';
import { VerbInterface } from '@models/verb.model';

@Injectable()
export class FavoriteVerbResolver implements Resolve<VerbInterface> {

    constructor(
        private searchVerbService: SearchVerbsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<VerbInterface> {
        const verb = route.params.verb;
        return this.searchVerbService.getVerbDefinition(verb);
    }
}
