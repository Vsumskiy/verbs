import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';



@NgModule({
    declarations: [
        AccordionComponent
    ],
    exports: [
        AccordionComponent
    ],
    imports: [
        CommonModule,
        CustomIconModule
    ]
})
export class AccordionModule { }
