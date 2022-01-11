import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from 'src/app/pages/dictionary/dictionary.component';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryResolver } from '@pages/dictionary/dictionary.resolver';
import { BreadcrumbsModule } from '@app/components/breadcrumbs/breadcrumbs.module';
import { FlexModule } from '@angular/flex-layout';
import { WordSearchModule } from '@app/components/word-search/word-search.module';
import { EmptyResultModule } from '@app/components/empty-result/empty-result.module';
import { VerbDefinitionModule } from '@app/components/verbs/verb-definition/verb-definition.module';
import { WordDefinitionModule } from '@app/components/dictionary/word-definition/word-definition.module';


const routes: Routes = [
    {
        path: '',
        component: DictionaryComponent,
        resolve: {
            resolver: DictionaryResolver
        }
    }
];

@NgModule({
    declarations: [
        DictionaryComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbsModule,
        FlexModule,
        WordSearchModule,
        EmptyResultModule,
        VerbDefinitionModule,
        WordDefinitionModule
    ],
    providers: [DictionaryResolver]
})
export class DictionaryModule {}
