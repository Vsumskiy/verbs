import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
    selector: 'app-verb-search',
    templateUrl: './verb-search.component.html',
    styleUrls: ['./verb-search.component.scss']
})
export class VerbSearchComponent implements OnInit {

    @Output() verbName: EventEmitter<string> = new EventEmitter<string>();

    public searchControl = this.fb.control('');

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.subscribeToSearchControl();
        this.searchControl.setValue('do');
    }

    private subscribeToSearchControl(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(800),
            distinctUntilChanged(),
            filter(v => Boolean(v))
        ).subscribe(value => this.verbName.emit(value));
    }
}
