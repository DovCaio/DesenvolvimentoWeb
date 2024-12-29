import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
  standalone: true
})
export class ForDirective implements OnInit {
  //O EM é o indetificador do que ele vai pegar, ou seja o que vier depois disso vai ser transformado em um array
  @Input('myForEm') numbers: number[] = [];
  @Input('myForUsando') texto: string = '';

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, {$implicit: number});
    }   
  }

}
