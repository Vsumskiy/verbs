import { Component, OnInit } from '@angular/core';
import { animations } from '@core/animations/animations';
import { DictionaryService } from '@services/dictionary.service';
import { ActivatedRoute } from '@angular/router';
import { WordDefinitionInterface } from '@models/dictionary/word-definition.interface';
import { SearchWordService } from '@services/search-word.service';

@Component({
    selector: 'app-dictionary',
    templateUrl: './dictionary.component.html',
    styleUrls: ['./dictionary.component.scss'],
    animations: animations
})
export class DictionaryComponent implements OnInit {

    public typedWord: string;
    public wordDefinition: WordDefinitionInterface[];
    public loadingState: boolean;

    constructor(
        private dictionaryService: DictionaryService,
        private searchWordService: SearchWordService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.wordDefinition = this.route.snapshot.data.resolver;
        this.typedWord = this.searchWordService.lastTypedWord;
    }

    public onSearchVerb(word: string) {
        this.typedWord = word;
        this.loadingState = true;
        this.dictionaryService.getWordDefinition(word).subscribe((definition => {
            this.wordDefinition = definition;
        })).add(() => this.loadingState = false);
    }
}
