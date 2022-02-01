import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsComponent } from './flashcards.component';
import {RouterModule, Routes} from '@angular/router';
import {FlashcardsResolver} from '@pages/flash-cards/flashcards.resolver';
import {BreadcrumbsModule} from '@app/components/breadcrumbs/breadcrumbs.module';
import {FlexModule} from '@angular/flex-layout';
import {CustomIconModule} from '@core/components/custom-icon/custom-icon.module';
import {FlipCardModule} from '@app/components/flip-card/flip-card.module';

const routers: Routes = [
    {
        path: '',
        component: FlashcardsComponent,
        resolve: {
            resolver: FlashcardsResolver
        }
    }
];

@NgModule({
    declarations: [
        FlashcardsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routers),
        BreadcrumbsModule,
        FlexModule,
        CustomIconModule,
        FlipCardModule
    ],
    providers: [FlashcardsResolver]
})
export class FlashcardsModule { }

