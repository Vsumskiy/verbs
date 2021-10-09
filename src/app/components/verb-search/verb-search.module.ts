import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VerbSearchComponent } from 'src/app/components/verb-search/verb-search.component';
import { FlexModule } from '@angular/flex-layout';
import { CustomIconModule } from '@app/components/custom-icon/custom-icon.module';


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
        CustomIconModule
    ]
})
export class VerbSearchModule {}
