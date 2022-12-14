import { ChatMessage } from './../../../data/data';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  chatMenuState : boolean | null;
  anchorState : boolean | null;

  @Input("data")
  data : ChatMessage

  constructor() { }

  ngOnInit() {

    if(!this.data){
      this.data = {
          id: 1,
          text: 'Contrary to popular belief,',
          isYesNo: false,
          answered: false,
          date: new Date(),
          dir: 'r',
          buddyId: 1,
          reactions: []
      };
    }
  }

  ngAfterViewInit(){

  }
}
