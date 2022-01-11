import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyResultComponent } from '@app/components/empty-result/empty-result.component';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        EmptyResultComponent
    ],
    exports: [
        EmptyResultComponent
    ],
    imports: [
        CommonModule,
        CustomIconModule,
        FlexModule
    ]
})
export class EmptyResultModule {}
