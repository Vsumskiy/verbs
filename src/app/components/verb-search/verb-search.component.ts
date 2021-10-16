import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SearchVerbsService } from '@services/search-verbs.service';

@Component({
    selector: 'app-verb-search',
    templateUrl: './verb-search.component.html'
})
export class VerbSearchComponent implements OnInit {

    @Output() verbName: EventEmitter<string> = new EventEmitter<string>();

    public searchControl = this.fb.control('');

    constructor(
        private fb: FormBuilder,
        private searchVerbsService: SearchVerbsService
    ) {}

    ngOnInit(): void {
        this.subscribeToSearchControl();
        this.searchControl.setValue(this.searchVerbsService.lastTypedWord);
    }

    private subscribeToSearchControl(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(800),
            distinctUntilChanged(),
            filter(v => Boolean(v))
        ).subscribe(value => this.verbName.emit(value));
    }
}
