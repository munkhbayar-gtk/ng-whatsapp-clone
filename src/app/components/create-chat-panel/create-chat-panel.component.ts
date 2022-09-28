import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-create-chat-panel',
  templateUrl: './create-chat-panel.component.html',
  styleUrls: ['./create-chat-panel.component.scss'],
  animations: [
    trigger('onShowAnim', [
      state('false', style({ opacity:0.5, transform: 'translateX(-10%)'})),
      state('true', style({ opacity:1, transform: 'translateX(0%)'})),
      transition('false => true', animate('450ms ease-in')),
  ]),]
})
export class CreateChatPanelComponent implements OnInit {

  onShowAnimState = false;

  @ViewChild("appChatSearchBox")
  appChatSearchBox : SearchBoxComponent;

  @Output("onBackArrowClicked")
  onBackArrowClicked = new EventEmitter();

  changeOpenState(opened : boolean, delay?: number) {
    if(delay) {
      setTimeout(() => {
        this._chageOpenState(opened);
      }, delay)
    }else{
      this._chageOpenState(opened);
    }
  }

  private _chageOpenState(opened : boolean) {
    this.onShowAnimState = opened;
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  blurSearchInput() {
    this.appChatSearchBox.requestBlur();
    console.log('blur requested');
  }

  delay(callback : any, delay : number) {
    setTimeout(callback, delay);
  }

}
