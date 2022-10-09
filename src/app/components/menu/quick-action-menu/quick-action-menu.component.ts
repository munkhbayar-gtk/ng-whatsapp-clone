import { trigger, transition, style, animate } from '@angular/animations';
import { Output, EventEmitter, Component, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild, ElementRef, Input } from '@angular/core';
import { QuickActionMenuItemComponent, QuickMenuItemSelectedListener } from '../quick-action-menu-item/quick-action-menu-item.component';

/*
      transition('true => false', [
        style({'min-height': '*', height: '0px'}),
        animate('200ms ease-out', style({'min-height': '0px', height: '0px'}))
      ]),
      transition('false => true', [
        style({'min-height': '0px'}),
        animate('200ms ease-in', style({'min-height': '*', height: '*'}))
      ])
*/
@Component({
  selector: 'app-quick-action-menu',
  templateUrl: './quick-action-menu.component.html',
  styleUrls: ['./quick-action-menu.component.scss'],
  animations: [
    trigger('emojiContainerH', [
      transition('false => true', [
        style({'max-width': '0px', 'width': '0px'}),
        animate('2000ms ease-in', style({'max-width': '*', 'width': '*'}))
      ]),
      transition('true => false', [
        style({'max-width': '*', 'width': '*'}),
        animate('200ms ease-out', style({'max-width': '0px', 'width': '0px'}))
      ])
    ])
  ]
})
export class QuickActionMenuComponent implements OnInit, QuickMenuItemSelectedListener {

  @Input('dir')
  dir = 'horizontal';

  @Input('animationState')
  animState : boolean = false;

  @ContentChildren(QuickActionMenuItemComponent)
  quickMenuItems : QueryList<QuickActionMenuItemComponent>;

  @Output('onItemSelected')
  onItemSelected = new EventEmitter<QuickActionMenuItemComponent>();

  //@ViewChild(TemplateRef)
  //contentTemplateContainer : TemplateRef<any>;
  constructor() { }



  @ViewChild('quickActionMenuContainer')
  private quickActionMenuContainer : ElementRef<HTMLElement>;

  getWidth() {
    return this.quickActionMenuContainer.nativeElement.clientWidth;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('quick-menu-items-size:', this.quickMenuItems.length);
    //this.contentTemplateContainer.createEmbeddedView
    //console.log(this.contentTemplateContainer);
    this.quickMenuItems.forEach(item=>{
      this.quickActionMenuContainer.nativeElement.appendChild(item.elementRef.nativeElement);
      console.log('appended', item.subIdx);

      item.itemSelection = this;
    })

  }

  onSelected(item: QuickActionMenuItemComponent): void {
    //console.log('selected', item.idx, item.subIdx)
    this.onItemSelected.emit(item);
  }

  getStyle(itemWidth: number) : any{
    if(this.dir == 'horizontal') {
      return {
        'width' : (this.quickMenuItems.length * itemWidth)+'px',
        'height' : '56px'
      }
    }
    return {
      'height' : (this.quickMenuItems.length * itemWidth)+'px'
    }
  }


}
