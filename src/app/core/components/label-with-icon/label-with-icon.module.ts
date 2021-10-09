import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelWithIconComponent } from './label-with-icon.component';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
    declarations: [
        LabelWithIconComponent
    ],
    exports: [
        LabelWithIconComponent
    ],
    imports: [
        CommonModule,
        CustomIconModule,
        FlexModule
    ]
})
export class LabelWithIconModule { }
