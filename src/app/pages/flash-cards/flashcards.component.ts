import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {speechService} from '@core/services/speech.service';
import {RandomWordInterface} from '@models/random-words/random-word.interface';
import {RandomWordsService} from '@services/random-words.service';

@Component({
    selector: 'app-flash-cards',
    templateUrl: './flashcards.component.html'
})
export class FlashcardsComponent implements OnInit {

    public randomWord: RandomWordInterface;
    public currentIndex = 0;

    constructor(
        private route: ActivatedRoute,
        private audioService: speechService,
        private randomWordsService: RandomWordsService
    ) { }

    ngOnInit(): void {
        this.initCurrentRandomWordByIndex();
    }

    public playAudio(): void {
        this.audioService.play(this.randomWord.word);
    }

    public showPrevious(): void {
        this.currentIndex = this.currentIndex - 1;
        this.initCurrentRandomWordByIndex();
    }

    public showNext(): void {
        this.currentIndex = this.currentIndex + 1;

        // if value already exist in the collected array, render stored value
        if (this.randomWordsService.randomWordsCollection[this.currentIndex]) {
            this.initCurrentRandomWordByIndex();
            return;
        }

        this.randomWordsService.getRandomWod().subscribe(() => {
            this.initCurrentRandomWordByIndex();
        });
    }

    private initCurrentRandomWordByIndex(): void {
        this.randomWord = this.randomWordsService.randomWordsCollection[this.currentIndex];
    }
}
