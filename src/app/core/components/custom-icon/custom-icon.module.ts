import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIconComponent } from 'src/app/core/components/custom-icon/custom-icon.component';



@NgModule({
    declarations: [
        CustomIconComponent
    ],
    exports: [
        CustomIconComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CustomIconModule { }
