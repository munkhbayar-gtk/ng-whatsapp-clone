import { Component, HostListener, OnInit,EventEmitter,Output, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-chat-emoji-button',
  templateUrl: './chat-emoji-button.component.html',
  styleUrls: ['./chat-emoji-button.component.css']
})
export class ChatEmojiButtonComponent implements OnInit {

  mXCord : number = -1;
  mYCord : number = -1;

  @Output('onOpenedState')
  readonly onOpenStateChanged = new EventEmitter();

  openState : boolean = false;

  setOpenState(openState : boolean) {
    this.openState = openState;
  }
  constructor(private eRef : ElementRef) { }

  ngOnInit() {

  }

  private _handleEmojiButtonClick(event : PointerEvent) {
    //style="top: 169.25px; left: 1490.58px;"
    let rect = this.eRef.nativeElement.getBoundingClientRect();
    console.log('rect', rect);
    this.mXCord =  rect.x;
    this.mYCord =  rect.y;
    this.openState = true;
    this.fire();
  }

  @HostListener('window:click', ['$event'])
  _onClickedOutside(event : PointerEvent) {
    let state = false;
    if(this.eRef.nativeElement.contains(event.target)){
      console.log('clicked-inside', event);
      state = true;
      this._handleEmojiButtonClick(event);
    }else{
      console.log('clicked-outside', event);
      state = false;
    }
    this.openState = state;
  }

  private fire() : void {
    this.onOpenStateChanged.emit(this.openState);
  }
}
