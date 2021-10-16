import { Component, OnInit } from '@angular/core';
import { animations } from '@core/animations/animations';
import { ActivatedRoute } from '@angular/router';
import { VerbInterface } from '@models/verb.model';
import { ConjugationContext } from '@models/conjugation-tables.interface';

@Component({
    selector: 'app-favorite-verb',
    templateUrl: './favorite-verb.component.html',
    animations: animations
})
export class FavoriteVerbComponent implements OnInit {

    public verb: string;
    public verbDefinition: VerbInterface;
    public conjugationContext: ConjugationContext = 'conditional';

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.verbDefinition = this.route.snapshot.data.verbDefinition;
        this.verb = this.route.snapshot.params.verb;
    }

    public onSwitchConjugationContext(context: ConjugationContext) {
        this.conjugationContext = context;
    }

}
