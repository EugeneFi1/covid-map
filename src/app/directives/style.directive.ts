import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appSwitchTextColor]'
})
export class StyleDirective {
    // Use host binding instead of ElementRef and Renderer2
    constructor(private el: ElementRef, private r: Renderer2) {
    }

    @Input('appSwitchTextColor') color: string = 'blue';
    // TODO: refactor style directive, pass styles obj
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};
    @HostBinding('style.color') elColor = null;

    @HostListener('click', ['$event']) onClick(event: Event): void {
        console.log(event);
    }

    @HostListener('mouseenter') onEnter(): void {
        this.elColor = this.color;
        // For Renderer and ElementRef
        // this.r.setStyle(this.el.nativeElement, 'color', this.color);
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
        // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    }

    @HostListener('mouseleave') onLeave(): void {
        this.elColor = null;
        // For Renderer and ElementRef
        // this.r.setStyle(this.el.nativeElement, 'color', null);
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
        // this.r.setStyle(this.el.nativeElement, 'border', null);
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    }
}
