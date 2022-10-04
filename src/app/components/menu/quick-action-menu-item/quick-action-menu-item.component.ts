import { Component, OnInit,Input } from '@angular/core';

enum IconType {
  IMG,
  SVG
}

@Component({
  selector: 'app-quick-action-menu-item',
  templateUrl: './quick-action-menu-item.component.html',
  styleUrls: ['./quick-action-menu-item.component.scss']
})
export class QuickActionMenuItemComponent implements OnInit {

  @Input('iconType')
  iconType : IconType = IconType.IMG;

  imgSrc : string = '';

  constructor() { }

  ngOnInit() {
  }

}
