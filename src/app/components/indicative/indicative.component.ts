import { Component, Input, OnInit } from '@angular/core';
import { IndicativeInterface } from '@models/indicative.interface';
import { TensesEnum } from '@models/tenses.enum';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PronounEnum } from '@models/pronoun.enum';
import { getUniqueArrayOfArray } from '@helpers/get-unique-array-of-array';

@Component({
    selector: 'app-indicative',
    templateUrl: './indicative.component.html',
    styleUrls: ['./indicative.component.scss']
})
export class IndicativeComponent implements OnInit {

    @Input()
    set examples(value: IndicativeInterface[]) {
        if (value) {
            this.indicative = value;
        }
    }

    public tenseSelect: FormControl;
    public pronounEnum = PronounEnum;
    public indicative: IndicativeInterface[];
    public tenses: string[];

    public tenseExamples$: Observable<IndicativeInterface[]>;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.tenseSelect = this.fb.control(TensesEnum.Simple_Present);
        this.tenses = this.indicative.map(i => i.heading);

        this.tenseExamples$ = this.tenseSelect.valueChanges.pipe(
            startWith(TensesEnum.Simple_Present),
            map((value) => this.sortIndicative(value)),
            map(examples => examples.map(e => (
                { ...e, forms: this.getUniqArrayOfForms(e.forms) }
            )))
        );
    }

    private sortIndicative(selectedTense: TensesEnum): IndicativeInterface[] {
        return this.indicative.filter(example => example.heading === selectedTense);
    }

    private getUniqArrayOfForms(forms: string[][]): string[][] {
        return getUniqueArrayOfArray<string[]>(forms);
    }

}
