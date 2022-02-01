import { Component, OnInit } from '@angular/core';
import { VerbInterface } from '@models/verbs/verb.model';
import { ConjugationContext } from '@models/verbs/conjugation-tables.interface';
import { SearchVerbsService } from '@services/search-verbs.service';
import { animations } from '@core/animations/animations';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { SearchWordService } from '@services/search-word.service';

@Component({
    selector: 'app-verbs',
    templateUrl: './verbs.component.html',
    animations: animations
})
export class VerbsComponent implements OnInit {

    public verbDefinition: VerbInterface;
    public typedWord: string;
    public conjugationContext: ConjugationContext = 'conditional';
    public loadingState: boolean;

    constructor(
        private searchVerbService: SearchVerbsService,
        private searchWordService: SearchWordService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.verbDefinition = this.route.snapshot.data.resolver;
        this.typedWord = this.searchWordService.lastTypedWord;
    }

    public onSearchVerb(verb: string) {
        this.typedWord = verb;
        this.loadingState = true;
        this.searchVerbService.getVerbDefinition(verb).pipe(
            finalize(() => this.loadingState = false)
        ).subscribe(verbDefinition => this.verbDefinition = verbDefinition);
    }

    public onSwitchConjugationContext(context: ConjugationContext) {
        this.conjugationContext = context;
    }
}
