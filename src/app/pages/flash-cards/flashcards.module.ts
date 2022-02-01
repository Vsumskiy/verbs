import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardsComponent } from './flash-cards.component';
import {RouterModule, Routes} from '@angular/router';
import {FlashCardsResolver} from '@pages/flash-cards/flash-cards.resolver';
import {BreadcrumbsModule} from '@app/components/breadcrumbs/breadcrumbs.module';
import {FlexModule} from '@angular/flex-layout';
import {CustomIconModule} from '@core/components/custom-icon/custom-icon.module';

const routers: Routes = [
    {
        path: '',
        component: FlashCardsComponent,
        resolve: {
            resolver: FlashCardsResolver
        }
    }
];

@NgModule({
    declarations: [
        FlashCardsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routers),
        BreadcrumbsModule,
        FlexModule,
        CustomIconModule
    ],
    providers: [FlashCardsResolver]
})
export class FlashCardsModule { }

