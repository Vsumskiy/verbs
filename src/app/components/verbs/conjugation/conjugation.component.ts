import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PronounEnum } from '@models/pronoun.enum';
import { getUniqueArrayOfArray } from '@helpers/get-unique-array-of-array';
import { ConjugationTableInterface } from '@models/conjugation-tables.interface';

@Component({
    selector: 'app-conjugation',
    templateUrl: './conjugation.component.html'
})
export class ConjugationComponent implements OnInit {


    @Input()
    set examples(value: ConjugationTableInterface[]) {
        if (value) {
            this.indicative = value;
            const [first] = this.indicative;
            this.tenseSelect = this.fb.control(first.heading);
            this.setUpTenseExamples();
        }
    }

    public tenseSelect: FormControl;
    public pronounEnum = PronounEnum;
    public indicative: ConjugationTableInterface[];
    public tenses: string[];

    public tenseExamples$: Observable<ConjugationTableInterface[]>;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.tenses = this.indicative.map(i => i.heading);
    }

    private sortIndicative(selectedTense: string): ConjugationTableInterface[] {
        return this.indicative.filter(example => example.heading === selectedTense);
    }

    private getUniqArrayOfForms(forms: string[][]): string[][] {
        return getUniqueArrayOfArray<string[]>(forms);
    }

    private setUpTenseExamples(): void {
        const [first] = this.indicative;
        this.tenseExamples$ = this.tenseSelect.valueChanges.pipe(
            startWith(first.heading),
            map((value) => this.sortIndicative(value)),
            map(examples => examples.map(e => (
                { ...e, forms: this.getUniqArrayOfForms(e.forms) }
            )))
        );
    }

}
