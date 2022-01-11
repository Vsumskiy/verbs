import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-word-definition-skeleton',
    templateUrl: './word-definition-skeleton.component.html'
})
export class WordDefinitionSkeletonComponent implements OnInit {

    @Input() count: number;

    public countOfSkeletons: any;

    ngOnInit(): void {
        this.countOfSkeletons = new Array(this.count).fill(null);
    }

}
