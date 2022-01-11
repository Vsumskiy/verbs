import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html'
})
export class AccordionComponent {

    @Input() title: string;

    public isOpen = false;

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
