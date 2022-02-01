import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {DictionaryService} from '@services/dictionary.service';
import {SearchWordService} from '@services/search-word.service';
import {RandomWordsService} from '@services/random-words.service';
import {RandomWordInterface} from '@models/random-words/random-word.interface';

@Injectable()
export class FlashcardsResolver implements Resolve<RandomWordInterface> {

    constructor(
        private searchWordService: SearchWordService,
        private dictionaryService: DictionaryService,
        private randomWordsService: RandomWordsService
    ) {}

    resolve(): Observable<RandomWordInterface> {
        return this.randomWordsService.getRandomWod();
    }

}
