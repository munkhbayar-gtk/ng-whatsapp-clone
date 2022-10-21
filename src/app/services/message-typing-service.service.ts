import { Injectable } from '@angular/core';
import { Conversation } from '../data/data';
import { MessageDataService } from './message-data.service';

@Injectable({
  providedIn: 'root'
})
export class MessageTypingService {

  text : string = '';

  selectedConversation: Conversation;

  constructor(private messageDataService: MessageDataService) { }

  addText(txt : string) {
    this.text = `${this.text}${txt}`;
  }

  send(){
    this.messageDataService.sendMessage(this.selectedConversation, this.text).then(() => {
      this.text = "";
    });
  }
}
