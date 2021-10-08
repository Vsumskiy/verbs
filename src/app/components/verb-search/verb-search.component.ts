import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-verb-search',
    templateUrl: './verb-search.component.html',
    styleUrls: ['./verb-search.component.scss']
})
export class VerbSearchComponent implements OnInit {

    @Output() verbName: EventEmitter<string> = new EventEmitter<string>();

    public searchControl = this.fb.control('');

    public listenSpeech$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.subscribeToSearchControl();
    }

    public onBindSpeechToFormControlValue(speech: string): void {
        this.searchControl.setValue(speech);
    }

    public toggleRecord(): void {
        const isRecording = this.listenSpeech$.value;
        this.listenSpeech$.next(!isRecording);
    }

    private subscribeToSearchControl(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            filter(v => Boolean(v))
        ).subscribe(value => this.verbName.emit(value));
    }

}
