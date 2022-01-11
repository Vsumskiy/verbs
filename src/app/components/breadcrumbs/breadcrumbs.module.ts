import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';



@NgModule({
    declarations: [
        BreadcrumbsComponent
    ],
    exports: [
        BreadcrumbsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CustomIconModule
    ]
})
export class BreadcrumbsModule { }
