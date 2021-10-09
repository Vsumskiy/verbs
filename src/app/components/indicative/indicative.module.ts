import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicativeComponent } from './indicative.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { CustomIconModule } from '@app/components/custom-icon/custom-icon.module';



@NgModule({
    declarations: [
        IndicativeComponent
    ],
    exports: [
        IndicativeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexModule,
        CustomIconModule
    ]
})
export class IndicativeModule { }
