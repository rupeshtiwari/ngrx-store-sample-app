import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnChanges {
    @Input() focus: boolean;
    @Input() key: string;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.focus) {
            if (changes.focus.currentValue === true) {
                this.el.nativeElement.focus();
            } else if (changes.focus.currentValue === false && changes.focus.previousValue === true) {
                this.el.nativeElement.blur();
            }
        }
    }
}
