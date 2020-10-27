import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  private toggle = 0;
  @Input() color1 = 'rgb(50, 168, 82)';
  @Input() color2 = 'rgb(255, 0, 0)';

  constructor(private doms: DomSanitizer) { }

  @HostBinding('style') get myStyle(): SafeStyle {
    if (this.toggle === 0) {
      const style = '';
      return this.doms.bypassSecurityTrustStyle(style);
    } else if (this.toggle === 1) {
      const style = `background: ${this.color1}`;
      return this.doms.bypassSecurityTrustStyle(style);
    } else {
      const style = `background: ${this.color2}`;
      return this.doms.bypassSecurityTrustStyle(style);
    }
  }

  @HostListener('click') onClick(): void {
    if (this.toggle < 2) {
      this.toggle += 1;
    } else {
      this.toggle = 0;
    }

  }

}
