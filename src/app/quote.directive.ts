import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appQuote]'
})
export class QuoteDirective implements OnInit {

  @Input() politicianQuote: string;
  @Input() politicianAuthor: string;

  constructor(private el: ElementRef) {}

   ngOnInit() {
    this.el.nativeElement.innerHTML = `"${this.politicianQuote}" <br> - ${this.politicianAuthor}`;
   }

}
