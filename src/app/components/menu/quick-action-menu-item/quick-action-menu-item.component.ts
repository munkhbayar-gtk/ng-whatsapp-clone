import { Component, OnInit,Input, ElementRef,Output,EventEmitter } from '@angular/core';

enum IconType {
  IMG,
  MAT_ICON,
  SVG
}

export interface QuickMenuItemSelectedListener {
  onSelected (item : QuickActionMenuItemComponent) : void
}

@Component({
  selector: 'app-quick-action-menu-item',
  templateUrl: './quick-action-menu-item.component.html',
  styleUrls: ['./quick-action-menu-item.component.scss']
})
export class QuickActionMenuItemComponent implements OnInit {

  @Input('idx')
  idx : number = -1;

  @Input('subIdx')
  subIdx : number = -1;

  @Input('iconType')
  iconType = 'img' ;
  //iconType : IconType = IconType.IMG;

  @Input('imgSrc')
  imgSrc : string = '';

  itemSelection : QuickMenuItemSelectedListener;

  constructor(public elementRef : ElementRef<HTMLElement>) { }

  ngOnInit() {
  }

  _handleClick(event: Event) {
    console.log('clicked', this.idx, this.subIdx);
    event.preventDefault();
    event.stopPropagation();
    if(this.itemSelection) {
      this.itemSelection.onSelected(this);
    }
  }
}
