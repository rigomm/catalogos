import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumero]'
})
export class NumeroDirective {

  @Input() monto: string;

  constructor(private elementRef: ElementRef) {

    elementRef.nativeElement.setAttribute('type', 'number');

  }

  @HostListener('keyup', ['$event'])
  onkeyup(e) {

    this.validarMonto();

  }

  validarMonto() {

    const cantCapturada = parseInt(this.elementRef.nativeElement.value);
    const montoInt = parseInt(this.monto);

    if (cantCapturada > montoInt) {
      this.elementRef.nativeElement.style.setProperty('border-color', 'red');
    }
    else {
      this.elementRef.nativeElement.style.setProperty('border-color', 'green');
    }

  }

}
