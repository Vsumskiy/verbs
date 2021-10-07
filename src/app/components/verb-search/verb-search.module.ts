import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {VerbSearchComponent} from 'src/app/components/verb-search/verb-search.component';



@NgModule({
    declarations: [
        VerbSearchComponent
    ],
    exports: [
        VerbSearchComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class VerbSearchModule {}
