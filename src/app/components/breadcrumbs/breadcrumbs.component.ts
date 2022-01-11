import { Component, Input } from '@angular/core';
import { animations } from '@core/animations/animations';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    animations: animations
})
export class BreadcrumbsComponent {

    @Input() title = '';

}
