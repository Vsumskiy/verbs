import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { VerbDefinitionModule } from '@app/components/verb-definition/verb-definition.module';
import { VerbSearchModule } from '@app/components/verb-search/verb-search.module';
import { HomeComponent } from './home.component';
import { IndicativeModule } from '@app/components/indicative/indicative.module';
import { CustomIconModule } from '@app/components/custom-icon/custom-icon.module';

const paths: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(paths),
        VerbSearchModule,
        VerbDefinitionModule,
        FlexModule,
        IndicativeModule,
        CustomIconModule,
    ]
})
export class HomeModule {}
