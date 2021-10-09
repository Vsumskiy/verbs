import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent implements OnDestroy{

    @Input() activeClass = 'active';

    @ViewChild('elements')
    set elements(container: ElementRef) {
        const element = (container.nativeElement as HTMLDivElement);
        if (element && element.children) {
            this.buttons = ([...element.children] as HTMLButtonElement[]);
            this.addEventListeners(this.buttons);
            this.addActiveClassToInitialActiveBtn();
        }
    };

    private buttons: HTMLButtonElement[];

    constructor() { }

    private addActiveClassToInitialActiveBtn(): void {
        this.buttons.forEach(button => {
            if (button.getAttribute('active') === 'true') {
                this.addActiveClass(button);
            }
        });
    }

    private addEventListeners(btns: HTMLButtonElement[]): void {
        btns.forEach(button => button.addEventListener('click', this.onClick.bind(this)));
    }

    private removeEventListeners(): void {
        this.buttons.forEach(i => i.removeEventListener('click', this.onClick.bind(this)));
    }

    private onClick(event: PointerEvent): void {
        this.removeActiveClassOnButtons();
        const targetButton = (event.target as HTMLButtonElement);
        this.addActiveClass(targetButton);
    }

    private addActiveClass(btn: HTMLButtonElement): void {
        btn.classList.add(this.activeClass);
    }

    private removeActiveClassOnButtons(): void {
        this.buttons.forEach(button => button.classList.remove(this.activeClass));
    }

    ngOnDestroy() {
        this.removeEventListeners();
    }

}
