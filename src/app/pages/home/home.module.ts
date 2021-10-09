import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { VerbDefinitionModule } from '@app/components/verb-definition/verb-definition.module';
import { VerbSearchModule } from '@app/components/verb-search/verb-search.module';
import { HomeComponent } from './home.component';
import { ConjugationModule } from '@app/components/conjugation/conjugation.module';
import { CustomIconModule } from '@app/core/components/custom-icon/custom-icon.module';
import { ButtonGroupModule } from '@core/components/button-group/button-group.module';
import { LabelWithIconModule } from '@core/components/label-with-icon/label-with-icon.module';
import { VerbExamplesModule } from '@app/components/verb-examples/verb-examples.module';
import { EmptyResultComponent } from './empty-result/empty-result.component';

const paths: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent, EmptyResultComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(paths),
        VerbSearchModule,
        VerbDefinitionModule,
        FlexModule,
        ConjugationModule,
        CustomIconModule,
        ButtonGroupModule,
        LabelWithIconModule,
        VerbExamplesModule,
    ]
})
export class HomeModule {}
