import { Component, OnInit } from '@angular/core';
import { SearchVersService } from '@services/search-vers.service';
import { Observable } from 'rxjs';
import { VerbInterface } from '@models/verb.model';
import { animations } from '@core/animations/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [animations]
})
export class HomeComponent {

    public verbDefinition$: Observable<VerbInterface>;

    constructor(
        private searchVerbService: SearchVersService,
    ) { }

    public onSearchVerb(verb: string) {
        this.verbDefinition$ = this.searchVerbService.getVerbDefinition(verb);
    }

}
