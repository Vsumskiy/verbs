import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConjugationContext } from '@models/conjugation-tables.interface';
import { VerbInterface } from '@models/verb.model';

@Component({
    selector: 'app-verb-examples',
    templateUrl: './verb-examples.component.html'
})
export class VerbExamplesComponent implements OnInit {
    @Input() conjugationContext: ConjugationContext;
    @Input() verb: VerbInterface;
    @Output() switchConjugationContext: EventEmitter<ConjugationContext> = new EventEmitter<ConjugationContext>();

    constructor() { }

    ngOnInit(): void {
    }

    public onSwitchConjugationContext(conjugationContext: ConjugationContext): void {
        this.switchConjugationContext.emit(conjugationContext);
    }
}
