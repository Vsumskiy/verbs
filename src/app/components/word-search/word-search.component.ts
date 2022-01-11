import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, skip } from 'rxjs/operators';
import { SearchWordService } from '@services/search-word.service';

@Component({
    selector: 'app-word-search',
    templateUrl: './word-search.component.html'
})
export class WordSearchComponent implements OnInit {

    @Output() verbName: EventEmitter<string> = new EventEmitter<string>();

    public searchControl = this.fb.control('');

    constructor(
        private fb: FormBuilder,
        private searchWordService: SearchWordService
    ) {}

    ngOnInit(): void {
        this.subscribeToSearchControl();
        this.searchControl.setValue(this.searchWordService.lastTypedWord);
    }

    private subscribeToSearchControl(): void {
        this.searchControl.valueChanges.pipe(
            skip(1),
            debounceTime(800),
            distinctUntilChanged(),
            filter(v => Boolean(v))
        ).subscribe(value => this.verbName.emit(value));
    }
}
