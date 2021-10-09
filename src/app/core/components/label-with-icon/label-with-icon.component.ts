import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label-with-icon',
    templateUrl: './label-with-icon.component.html',
})
export class LabelWithIconComponent {
    @Input() title: string;
    @Input() for: string;
    @Input() icon: string;
    @Input()
    set classes(cls: string[]) {
        if (cls) {
            this.cls = cls.join(' ');
        }
    }


    public cls: string;
}
