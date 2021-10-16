import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '@services/favorite.service';
import { animations } from '@core/animations/animations';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

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
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.favoritesWords$ = this.favoriteService.currentSavedWords$;
    }
}
