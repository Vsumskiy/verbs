import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VerbSearchComponent } from 'src/app/components/verb-search/verb-search.component';


@NgModule({
    declarations: [
        VerbSearchComponent
    ],
    exports: [
        VerbSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class VerbSearchModule {}
