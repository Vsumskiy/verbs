import { Component } from '@angular/core';
import { SearchVerbsService } from '@services/search-verbs.service';
import { Observable } from 'rxjs';
import { VerbInterface } from '@models/verb.model';
import { animations } from '@core/animations/animations';
import { ConjugationContext } from '@models/conjugation-tables.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    animations: [animations]
})
export class HomeComponent {

    public verbDefinition$: Observable<VerbInterface>;
    public typedWord: string;
    public conjugationContext: ConjugationContext = 'conditional';

    constructor(
        private searchVerbService: SearchVerbsService
    ) { }

    public onSearchVerb(verb: string) {
        this.typedWord = verb;
        this.verbDefinition$ = this.searchVerbService.getVerbDefinition(verb);
    }

    public onSwitchConjugationContext(context: ConjugationContext) {
        this.conjugationContext = context;
    }
}
