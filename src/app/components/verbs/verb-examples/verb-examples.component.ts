import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConjugationContext } from '@models/verbs/conjugation-tables.interface';
import { VerbInterface } from '@models/verbs/verb.model';

@Component({
    selector: 'app-verb-examples',
    templateUrl: './verb-examples.component.html'
})
export class VerbExamplesComponent {
    @Input() conjugationContext: ConjugationContext;
    @Input() verb: VerbInterface;
    @Output() switchConjugationContext: EventEmitter<ConjugationContext> = new EventEmitter<ConjugationContext>();

    public onSwitchConjugationContext(conjugationContext: ConjugationContext): void {
        this.switchConjugationContext.emit(conjugationContext);
    }
}
