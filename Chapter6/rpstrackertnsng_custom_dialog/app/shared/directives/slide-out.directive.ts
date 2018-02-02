import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { screen, ScreenMetrics } from 'platform';

const screenScale: number = screen.mainScreen.scale;
const offScreenMargin: number = screen.mainScreen.heightDIPs * -1;
const animationDuration = 400;

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[slide-out]'
})
export class SlideOutDirective {

    @Output() private dismissed: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    private element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;

    }

    public show(): void {
        this.element.nativeElement.animate({
            opacity: 0.5,
            scale: { x: 0.95, y: 0.95 },
            duration: animationDuration
        });
    }

    public dismiss(): void {
        this.element.nativeElement.animate({
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: animationDuration - animationDuration / 2,
            delay: 50
        })
            .then(() => this.dismissed.emit(true));
    }
}
