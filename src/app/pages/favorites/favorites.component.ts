import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '@services/favorite.service';
import { animations } from '@core/animations/animations';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchWordService } from '@services/search-word.service';
import { routerPathsConstant } from '@app/router/router-paths.constant';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    animations: animations
})
export class FavoritesComponent implements OnInit {

    public favoritesWords$: Observable<string[]>;
    public filterControl = this.fb.control('');

    constructor(
        private favoriteService: FavoriteService,
        private fb: FormBuilder,
        private router: Router,
        private searchWordService: SearchWordService,
    ) { }

    ngOnInit(): void {
        this.favoritesWords$ = this.favoriteService.currentSavedWords$;
    }

    public onNavigateToVerb(word: string): void {
        this.searchWordService.lastTypedWord = word;
        this.router.navigate([routerPathsConstant.verbs]);
    }

    public onNavigateToDefinition(word: string): void {
        this.searchWordService.lastTypedWord = word;
        this.router.navigate([routerPathsConstant.dictionary]);
    }
}
