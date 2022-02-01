import { Component, Input } from '@angular/core';
import { ConjugatedFormsType, TensesTypesEnum, TenseType } from '@models/verbs/verb.model';


interface ConjugatedForms {
    tense: string;
    verb: string;
}

enum RomanNumberHTMLCodes {
    One = '&#8544;',
    Two = '&#8545;',
    Three = '&#8546;'
}

@Component({
    selector: 'app-verb-definition',
    templateUrl: './verb-definition.component.html'
})
export class VerbDefinitionComponent {
    public conjugatedForms: ConjugatedForms[];

    @Input()
    set verbs(verbs: ConjugatedFormsType) {
        if (verbs) {
            this.conjugatedForms = this.mapConjugatedForms(verbs);
        }
    };

    private mapConjugatedForms(verbs: ConjugatedFormsType): ConjugatedForms[] {
        return verbs?.map(([tense, verb]) => {
            const displayedTense = this.getRomanNumber(tense);
            return { tense: displayedTense, verb };
        });
    }

    private getRomanNumber(tense: TenseType): string {
        const romanNumbers = {
            [TensesTypesEnum.Infinitive]: RomanNumberHTMLCodes.One,
            [TensesTypesEnum.Simple_Past]: RomanNumberHTMLCodes.Two,
            [TensesTypesEnum.Past_Participle]: RomanNumberHTMLCodes.Three
        };

        return romanNumbers[tense];
    }

}
