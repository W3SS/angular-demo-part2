import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appQuote]'
})
export class QuoteDirective implements OnInit {

  @Input() politicianQuote: string;
  @Input() politicianAuthor: any;

  constructor(private el: ElementRef) {}


   getPoliticianName(): string {
     return 'Abraham Lincoln';
   }
   ngOnInit() {
    this.el.nativeElement.innerHTML = `"${this.politicianQuote}" <br> - ${this.politicianAuthor}`;
   }

}
