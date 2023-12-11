// intersection-observer.directive.ts

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit {
  @Input() threshold: number = 0.5;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log('IntersectionObserverDirective')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('animate__animated', 'animate__zoomIn', 'animate__delay-0.5s');
          observer.unobserve(this.elementRef.nativeElement);
        }
      });
    }, { threshold: this.threshold });

    observer.observe(this.elementRef.nativeElement);
  }
}
