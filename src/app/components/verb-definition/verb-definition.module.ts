import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { VerbDefinitionComponent } from './verb-definition.component';
import { VerbDefinitionSkeletonComponent } from './verb-definition-skeleton/verb-definition-skeleton.component';


@NgModule({
    declarations: [
        VerbDefinitionComponent,
        VerbDefinitionSkeletonComponent
    ],
    exports: [
        VerbDefinitionComponent,
        VerbDefinitionSkeletonComponent
    ],
    imports: [
        CommonModule,
        FlexModule
    ]
})
export class VerbDefinitionModule {}
