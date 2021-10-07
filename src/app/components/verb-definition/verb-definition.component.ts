import { Component, Input, OnInit } from '@angular/core';
import { VerbInterface } from '@models/verb.model';


interface ConjugatedForms {
    tense: string;
    verb: string;
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
            return { tense, verb }
        })
    }

}
