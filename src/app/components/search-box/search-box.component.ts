import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-chat-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  animations: [
    trigger('rotateIn', [
      state('rotateOut', style({ transform: 'rotate(0)', opacity:1})),
      state('rotateIn', style({ transform: 'rotate(90deg)', opacity:0 })),
      transition('rotateOut => rotateIn', animate('0ms ease-out')),
      transition('rotateIn => rotateOut', animate('200ms ease-in'))
    ]),
    trigger('rotateOut', [
      state('rotateOut', style({ transform: 'rotate(0)', opacity:1})),
      state('rotateIn', style({ transform: 'rotate(-90deg)', opacity:0 })),
      transition('rotateOut => rotateIn', animate('0ms ease-out')),
      transition('rotateIn => rotateOut', animate('200ms ease-in'))
    ]),
  ]
})
export class SearchBoxComponent implements OnInit {

  iconState = false;

  constructor() { }

  ngOnInit() {
  }

  get arrowIconStateName() {
    return this.iconState ? 'rotateOut' : 'rotateIn';
  }
  get searchIconStateName() {
    return this.iconState ? 'rotateIn' : 'rotateOut';
  }

}
