import {Component, OnInit} from '@angular/core';
import {SearchVersService} from '@services/search-vers.service';
import {Observable} from 'rxjs';
import { VerbInterface } from '@models/verb.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public verbDefinition$: Observable<VerbInterface>;

    constructor(
        private searchVerbService: SearchVersService
    ) { }

    ngOnInit(): void {
    }

    public onSearchVerb(verb: string) {
        this.verbDefinition$ = this.searchVerbService.getVerbDefinition(verb);
    }
}
