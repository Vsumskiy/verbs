import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDefinitionComponent } from './word-definition.component';
import { WordDefinitionSkeletonComponent } from './word-definition-skeleton/word-definition-skeleton.component';
import { FlexModule } from '@angular/flex-layout';
import { CustomIconModule } from '@core/components/custom-icon/custom-icon.module';
import { AccordionModule } from '@core/components/accordion/accordion.module';



@NgModule({
    declarations: [
        WordDefinitionComponent,
        WordDefinitionSkeletonComponent,
        WordDefinitionSkeletonComponent
    ],
    exports: [
        WordDefinitionComponent
    ],
    imports: [
        CommonModule,
        FlexModule,
        CustomIconModule,
        AccordionModule
    ]
})
export class WordDefinitionModule { }
