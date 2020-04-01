import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() colorEnter: string;
  @Input() colorLeave: string;

  constructor(
    private elementRef: ElementRef
    ) {



   }
  ngOnInit(): void {
    this.elementRef.nativeElement.innerHTML= '<p>contenido de prueba</p>';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = this.colorEnter;

  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = this.colorLeave;

  }

}
