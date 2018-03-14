import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  _el: HTMLElement;
  @Input() setColor = 'yellow';
  constructor(el: ElementRef) {
    this._el = el.nativeElement;
  }

  @HostListener('mouseenter') onmouseenter() {
    this._el.style.background = this.setColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this._el.style.background = 'red';
  }

}
