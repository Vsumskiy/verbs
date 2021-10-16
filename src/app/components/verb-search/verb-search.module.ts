import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VerbSearchComponent } from 'src/app/components/verb-search/verb-search.component';
import { FlexModule } from '@angular/flex-layout';
import { CustomIconModule } from '@app/core/components/custom-icon/custom-icon.module';
import { LabelWithIconModule } from '@core/components/label-with-icon/label-with-icon.module';
import { FavoritesModule } from '@pages/favorites/favorites.module';
import { AddToFavoritesModule } from '@app/components/add-to-favorites/add-to-favorites.module';


@NgModule({
    declarations: [
        VerbSearchComponent
    ],
    exports: [
        VerbSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexModule,
        CustomIconModule,
        LabelWithIconModule,
        FavoritesModule,
        AddToFavoritesModule
    ]
})
export class VerbSearchModule {}
