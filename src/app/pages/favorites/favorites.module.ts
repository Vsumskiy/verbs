import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';
import { FavoriteVerbComponent } from '@pages/favorites/favorite-verb/favorite-verb.component';
import { FavoriteVerbResolver } from '@pages/favorites/favorite-verb.resolver';
import { VerbDefinitionModule } from '@app/components/verb-definition/verb-definition.module';
import { VerbExamplesModule } from '@app/components/verb-examples/verb-examples.module';
import { FlexModule } from '@angular/flex-layout';
import { AddToFavoritesModule } from '@app/components/add-to-favorites/add-to-favorites.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from '@core/pipes/filter-pipe/filter-pipe.module';

const routes: Routes = [
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: ':verb',
        component: FavoriteVerbComponent,
        resolve: {
            verbDefinition: FavoriteVerbResolver
        }
    }
];


@NgModule({
    declarations: [
        FavoritesComponent,
        FavoriteVerbComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CustomIconModule,
        VerbDefinitionModule,
        VerbExamplesModule,
        FlexModule,
        AddToFavoritesModule,
        ReactiveFormsModule,
        FilterPipeModule
    ],
    exports: [
        FavoriteVerbComponent
    ],
    providers: [FavoriteVerbResolver]
})
export class FavoritesModule {}
