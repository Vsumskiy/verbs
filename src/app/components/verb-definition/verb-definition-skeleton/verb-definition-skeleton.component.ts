import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-verb-definition-skeleton',
    templateUrl: './verb-definition-skeleton.component.html',
})
export class VerbDefinitionSkeletonComponent implements OnInit {

    @Input() count: number;

    public countOfSkeletons: any;

    ngOnInit(): void {
        this.countOfSkeletons = new Array(this.count).fill(null);
    }

}
