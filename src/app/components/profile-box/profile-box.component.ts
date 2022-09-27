import { MatMenuPanel } from '@angular/material/menu';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.scss']
})
export class ProfileBoxComponent implements OnInit {

  dotsMenuOpened = false;
  chatButtonClickedState = false;
  @Input('matMenuTriggerFor')
  menu: MatMenuPanel | null = null;

  @Output("chatButtonClicked")
  chatButtonClicked = new EventEmitter();

  onChatButtonClicked() {
    this.chatButtonClicked.emit();
    this.chatButtonClickedState = true;
    setTimeout(() => {
      this.chatButtonClickedState = false;
    }, 400);
  }
  log(obj : any) {
    console.log('log', obj);
  }
  constructor() { }

  ngOnInit() {
  }

}
