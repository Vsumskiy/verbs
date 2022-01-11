import { Component, Input } from '@angular/core';
import { WordDefinitionInterface } from '@models/dictionary/word-definition.interface';
import { AudioService } from '@core/services/audio.service';

@Component({
    selector: 'app-word-definition',
    templateUrl: './word-definition.component.html'
})
export class WordDefinitionComponent {

    @Input() words: WordDefinitionInterface[];

    constructor(
        private audioService: AudioService
    ) {}

    public playAudio(src: string): void {
        this.audioService.play(src);
    }

}
