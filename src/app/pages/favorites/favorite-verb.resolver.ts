import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchVersService } from '@services/search-vers.service';
import { VerbInterface } from '@models/verb.model';

@Injectable()
export class FavoriteVerbResolver implements Resolve<VerbInterface> {

    constructor(
        private searchVerbService: SearchVersService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<VerbInterface> {
        const verb = route.params.verb;
        return this.searchVerbService.getVerbDefinition(verb);
    }
}
