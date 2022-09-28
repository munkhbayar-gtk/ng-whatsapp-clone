import { Directive, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[ngInit]'
})
export class NgInitDirective implements OnInit{

  @Output("ngInit")
  ngInit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('ng-init directive ngOnInit called');
    this.ngInit.emit();
  }

}
