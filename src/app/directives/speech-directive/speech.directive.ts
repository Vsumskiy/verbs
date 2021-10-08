import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { SpeechRecognitionService } from '@services/speech-recognition.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
    selector: '[appSpeech]'
})
export class SpeechDirective implements OnDestroy {

    @Input()
    set switcher(shouldRecord: boolean) {
        console.log(shouldRecord);
        if (shouldRecord) {
            this.record();
        } else {
            this.stopRecording();
        }
    }

    @Output() speech: EventEmitter<string> = new EventEmitter<string>();

    private unsubscribe$ = new Subject();

    constructor(
        private speechService: SpeechRecognitionService
    ) { }

    private record(): void {
        this.speechService.record().pipe(
            filter(Boolean),
            takeUntil(this.unsubscribe$)
        ).subscribe((value: string) => {
            this.speech.emit(value);
        });
    }

    private stopRecording(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.speechService.stopRecording();
    }

    ngOnDestroy(): void {
        this.speechService.stopRecording();
    }

}
