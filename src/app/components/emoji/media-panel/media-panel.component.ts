import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-media-panel',
  templateUrl: './media-panel.component.html',
  styleUrls: ['./media-panel.component.scss']
})
export class MediaPanelComponent implements OnInit {

  @ViewChild('tabGroup')
  tabGroup : MatTabGroup

  @ViewChild("viewportScroller")
  scroller : ElementRef<HTMLElement>;

  @Input("tab-icons")
  tabIcons: Array<string>=[];

  @Input("tab-texts")
  tabTexts: Array<string>=[];
  constructor() { }

  @Input("tab-insertable")
  tabInsertable : boolean = false;

  ngOnInit() {

  }

  onAfterViewInit(){

  }

  private selectTab(index : number, visibleChild: HTMLElement) {
    this.tabGroup.selectedIndex = index;
  }

  private isVisible (ele : HTMLElement, container : HTMLElement){
    const { bottom, height, top } = ele.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
  }

  private getVisibleHeight(child : HTMLElement, container : HTMLElement) : number {
    let scrollTop = container.scrollTop;
    let scrollBot = scrollTop - container.clientHeight;

    let containerRect = container.getBoundingClientRect();
    let elemRect = child.getBoundingClientRect();

    let rect = {
      top: -1,
      right: -1,
      bottom : -1,
      left : -1
    };
    rect.top = elemRect.top - containerRect.top;
    rect.right = elemRect.right - containerRect.right;
    rect.bottom = elemRect.bottom - containerRect.bottom;
    rect.left = elemRect.left - containerRect.left;

    let eleTop = rect.top + scrollTop;
    let eleBot = eleTop + child.offsetHeight;

    let visibleTop = eleTop < scrollTop ? scrollTop : eleTop;
    let visibleBot = eleBot > scrollBot ? scrollBot : eleBot;

    return visibleBot - visibleTop;
  }

  onNewClicked(event : Event) {
    event.preventDefault();
    event.stopPropagation();
  }
  private selectedTabIndex : number | null = 0;
  private handleScrolling = false;

  private tabSelectedByMouse = false;

  trackTabMouseClicking(event : MouseEvent) {
    this.tabSelectedByMouse = true;
    console.log('mouse', event);
  }

  private scrollStopId : number | null = null;
  private _onScrollStopped(event : Event){
    console.log('mouse-scroll-stopped', this.tabRequestIndex);
    if(this.tabRequestIndex > -1 || this.tabSelectedByMouse) {
      this.tabRequestIndex = -1;
      this.tabSelectedByMouse = false;
      return;
    }
    const element : HTMLElement = event.target as HTMLElement;
    let firstVisibleChild : HTMLElement | null = null;
    let fistVisibleChildIndex : number | null = null;
    const children = element.children;
    for(let i = 0 ; i < children.length; i ++){
      const child = children[i] as HTMLElement;
      if(this.isVisible(child, element)){
        firstVisibleChild = child;
        fistVisibleChildIndex = i;
        break;
      }
      //console.log('isVisible', i, this.isVisible(child, element));
    }

    if(fistVisibleChildIndex != null && firstVisibleChild != null) {
      this.selectTab(fistVisibleChildIndex, firstVisibleChild);
    }
  }

  private scrolling = false;
  private lastScrollEvent : Event | null = null;
  onViewportScroller(event : Event) {
    let id = window.setInterval(()=>{}, 10);
    if(this.scrollStopId != null) {
      window.clearTimeout(this.scrollStopId);
    }
    this.scrollStopId = window.setTimeout(() => {
      this._onScrollStopped(event);
    }, 150);
  }

  private tabRequestIndex : number = -1;
  private _onTabSelectedByPointer(
    event : MatTabChangeEvent,
    tabGroup : MatTabGroup) {
      this.tabRequestIndex = event.index;
      const target = this.findTarget(event.index);
      target.scrollIntoView({behavior: 'smooth'});
      console.log('mouse-tab-selected-by-pointer', event);
  }
  onTabSelection(event : MatTabChangeEvent,
    disabledIndex : number,
    tabGroup : MatTabGroup
    //,
    //mediaScroller : CdkVirtualScrollViewport
    ) {

    const rect = tabGroup._elementRef.nativeElement.getBoundingClientRect();
    console.log('mouse-rect', rect);

    console.log(event.index, disabledIndex);
    if(event.index == disabledIndex) {
      //tabGroup.
      tabGroup.selectedIndex = this.selectedTabIndex;
    }else{
      this.selectedTabIndex = tabGroup.selectedIndex;
      //mediaScroller.scrollToIndex(this.selectedTabIndex!!, "smooth");
      if(this.tabSelectedByMouse) {
        this._onTabSelectedByPointer(event, tabGroup);
      }
    }
  }
  private findTarget(index : number) : HTMLElement {
    return this.scroller.nativeElement.children[index] as HTMLElement;
  }
  max(a : number, b : number) : number{
    return Math.max(a,b);
  }
  onMouseOver(event: Event){
    console.log('mouse-wheel', event)
  }

}
