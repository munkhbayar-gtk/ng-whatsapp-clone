import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @Input("filterable")
  filterable = true;

  @ViewChild("searchInput")
  searchInput : ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
    console.log('search-box ngOnInit called');
  }

  requestFocus() {
    this.searchInput.nativeElement.focus();
  }

  requestBlur() {
    this.searchInput.nativeElement.blur();
  }

  get arrowIconStateName() {
    return this.iconState ? 'rotateOut' : 'rotateIn';
  }
  get searchIconStateName() {
    return this.iconState ? 'rotateIn' : 'rotateOut';
  }

}
