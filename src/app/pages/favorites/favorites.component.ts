import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '@services/favorite.service';
import { animations } from '@core/animations/animations';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    animations: animations
})
export class FavoritesComponent implements OnInit {

    public favoritesWords$: Observable<string[]>;

    constructor(
        private favoriteService: FavoriteService,
    ) { }

    ngOnInit(): void {
        this.favoritesWords$ = this.favoriteService.currentSavedWords$;
    }
}
