import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { CustomIconModule } from '@app/core/components/custom-icon/custom-icon.module';
import { LabelWithIconModule } from '@core/components/label-with-icon/label-with-icon.module';
import { AddToFavoritesModule } from '@app/components/add-to-favorites/add-to-favorites.module';
import { WordSearchComponent } from '@app/components/word-search/word-search.component';


@NgModule({
    declarations: [
        WordSearchComponent
    ],
    exports: [
        WordSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexModule,
        CustomIconModule,
        LabelWithIconModule,
        AddToFavoritesModule
    ]
})
export class WordSearchModule {}
