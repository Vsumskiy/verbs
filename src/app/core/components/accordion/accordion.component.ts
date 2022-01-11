import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit {

    public isOpen = false;

    @Input() title: string;


    ngOnInit(): void {
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }
}
