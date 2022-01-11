import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerbsComponent } from './verbs.component';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { VerbDefinitionModule } from '@app/components/verbs/verb-definition/verb-definition.module';
import { VerbExamplesModule } from '@app/components/verbs/verb-examples/verb-examples.module';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';
import { BreadcrumbsModule } from '@app/components/breadcrumbs/breadcrumbs.module';
import { WordSearchModule } from '@app/components/word-search/word-search.module';
import { EmptyResultModule } from '@app/components/empty-result/empty-result.module';
import { VerbsResolver } from '@pages/verbs/verbs.resolver';


const routers: Routes = [
    {
        path: '',
        component: VerbsComponent,
        resolve: {
            resolver: VerbsResolver
        }
    }
];

@NgModule({
    declarations: [
        VerbsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routers),
        FlexModule,
        RouterModule,
        WordSearchModule,
        VerbDefinitionModule,
        VerbExamplesModule,
        CustomIconModule,
        BreadcrumbsModule,
        EmptyResultModule
    ],
    providers: [VerbsResolver]
})
export class VerbsModule { }
