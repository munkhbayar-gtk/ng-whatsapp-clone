import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss']
})
export class ChatPanelComponent implements OnInit {

  textToSend = "";
  constructor() { }

  ngOnInit() {
  }

  log(msg : any) {
    console.log('msg', msg);
  }
}
