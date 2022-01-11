import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConjugationComponent } from '@app/components/verbs/conjugation/conjugation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';
import { LabelWithIconModule } from '@core/components/label-with-icon/label-with-icon.module';



@NgModule({
    declarations: [
        ConjugationComponent
    ],
    exports: [
        ConjugationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexModule,
        CustomIconModule,
        LabelWithIconModule
    ]
})
export class ConjugationModule { }
