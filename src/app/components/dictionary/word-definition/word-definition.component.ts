import { Component, Input } from '@angular/core';
import { WordDefinitionInterface } from '@models/dictionary/word-definition.interface';
import { speechService } from '@core/services/speech.service';
import {SearchWordService} from '@services/search-word.service';

@Component({
    selector: 'app-word-definition',
    templateUrl: './word-definition.component.html'
})
export class WordDefinitionComponent {

    @Input() words: WordDefinitionInterface[];

    constructor(
        private audioService: speechService,
        private searchWordService: SearchWordService,
    ) {}

    public playAudio(): void {
        this.audioService.play(this.searchWordService.lastTypedWord);
    }

}
