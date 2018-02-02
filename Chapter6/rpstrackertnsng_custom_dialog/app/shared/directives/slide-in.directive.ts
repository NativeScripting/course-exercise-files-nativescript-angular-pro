import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { screen, ScreenMetrics } from 'platform';
import * as enums from 'ui/enums';
import { AnimationCurve } from 'ui/enums';

const screenScale: number = screen.mainScreen.scale;
const offScreenMargin: number = screen.mainScreen.heightDIPs * -1;
const animationDuration = 400;

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[slide-in]'
})
export class SlideInDirective {

    @Output() private dismissed: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    private element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
        this.element.nativeElement.marginBottom = offScreenMargin;
    }

    public show(): void {
        // This is the height of the modal panel, which should be calculated properly, but we're faking it here.
        const modalPanelHeight = this.getTranslateYHeight() / 2 - 30;
        console.log(modalPanelHeight);
        this.element.nativeElement.animate({
            translate: { x: 0, y: modalPanelHeight * -1 },
            duration: animationDuration,
            delay: 50,
            curve: AnimationCurve.cubicBezier(.03, .73, .36, 1)
        });
    }

    public dismiss(): void {
        this.element.nativeElement.animate({
            translate: { x: 0, y: this.getTranslateYHeight() },
            duration: animationDuration - animationDuration / 2,
            curve: AnimationCurve.easeIn
        })
            .then(() => this.dismissed.emit(true));
    }

    private getTranslateYHeight(): number {
        return this.element.nativeElement.getMeasuredHeight() / screenScale;
    }
}
