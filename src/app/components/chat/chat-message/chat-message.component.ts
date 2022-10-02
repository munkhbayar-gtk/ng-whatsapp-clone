import { ChatMessage } from './../../../data/ChatMessage';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {


  chatMenuState : boolean | null;

  @Input("data")
  data : ChatMessage

  constructor() { }

  ngOnInit() {

    if(!this.data){
      this.data = {
          id: 1,
          text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          isYesNo: true,
          answered: false,
          date: new Date(),
          dir: 'r'
      };
    }
  }

  ngAfterViewInit(){

  }
}
