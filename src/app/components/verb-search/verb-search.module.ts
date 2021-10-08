import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VerbSearchComponent } from 'src/app/components/verb-search/verb-search.component';
import { SpeechDirectiveModule } from '@app/directives/speech-directive/speech-directive.module';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        VerbSearchComponent
    ],
    exports: [
        VerbSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SpeechDirectiveModule,
        FlexModule
    ]
})
export class VerbSearchModule {}
