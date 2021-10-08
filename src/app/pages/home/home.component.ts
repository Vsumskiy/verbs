import { Component, OnInit } from '@angular/core';
import { SearchVersService } from '@services/search-vers.service';
import { Observable } from 'rxjs';
import { VerbInterface } from '@models/verb.model';
import { SpeechRecognitionService } from '@services/speech-recognition.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [SpeechRecognitionService]
})
export class HomeComponent implements OnInit {

    public verbDefinition$: Observable<VerbInterface>;

    constructor(
        private searchVerbService: SearchVersService,
        public speechService: SpeechRecognitionService
    ) { }

    ngOnInit(): void {
    }

    public onSearchVerb(verb: string) {
        this.verbDefinition$ = this.searchVerbService.getVerbDefinition(verb);
    }

    strart(): void {
        this.speechService.record()
            .subscribe(
                (value) => {
                    console.log(value);
                });
    }

    off(): void {
        this.speechService.stopRecording();
    }
}
