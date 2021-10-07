import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {VerbDefinitionComponent} from './verb-definition.component';



@NgModule({
    declarations: [
        VerbDefinitionComponent
    ],
    exports: [
        VerbDefinitionComponent
    ],
    imports: [
        CommonModule,
        FlexModule
    ]
})
export class VerbDefinitionModule {}
