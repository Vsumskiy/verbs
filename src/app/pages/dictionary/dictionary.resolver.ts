import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { WordDefinitionInterface } from '@models/dictionary/word-definition.interface';
import { SearchWordService } from '@services/search-word.service';
import { DictionaryService } from '@services/dictionary.service';
import { map } from 'rxjs/operators';

@Injectable()
export class DictionaryResolver implements Resolve<WordDefinitionInterface[]> {

    constructor(
        private searchWordService: SearchWordService,
        private dictionaryService: DictionaryService
    ) {}

    public resolve(): Observable<WordDefinitionInterface[]> {
        return this.dictionaryService.getWordDefinition(this.searchWordService.lastTypedWord).pipe(
            map((words ) => words?.filter(word => word.origin))
        );
    }
}
