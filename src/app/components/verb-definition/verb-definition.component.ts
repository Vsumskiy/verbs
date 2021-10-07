import { Component, Input, OnInit } from '@angular/core';
import { TensesTypesEnum, TenseType, VerbInterface } from '@models/verb.model';


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
    templateUrl: './verb-definition.component.html',
    styleUrls: ['./verb-definition.component.scss']
})
export class VerbDefinitionComponent implements OnInit {
    @Input()
    set verbs(v) {
        if (v) {
            this.conjugatedForms = this.mapConjugatedForms(v)
        }
    };


    public conjugatedForms: ConjugatedForms[];

    constructor() { }

    ngOnInit(): void {
    }

    private mapConjugatedForms(verbs: VerbInterface): ConjugatedForms[] {
        return verbs.conjugated_forms?.map(([tense, verb]) => {
           const displayedTense = this.getRomanNumber(tense);
            return { tense: displayedTense, verb }
        })
    }

    private getRomanNumber(tense: TenseType): string {
        const romanNumbers = {
            [TensesTypesEnum.Infinitive]: RomanNumberHTMLCodes.One,
            [TensesTypesEnum.Simple_Past]: RomanNumberHTMLCodes.Two,
            [TensesTypesEnum.Past_Participle]: RomanNumberHTMLCodes.Three
        }

        return romanNumbers[tense];
    }

}
