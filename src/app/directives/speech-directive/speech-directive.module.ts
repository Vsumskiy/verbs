import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechDirective } from './speech.directive';



@NgModule({
    declarations: [
        SpeechDirective
    ],
    exports: [
        SpeechDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SpeechDirectiveModule { }
