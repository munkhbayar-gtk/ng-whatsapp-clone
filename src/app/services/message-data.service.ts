import { Injectable } from '@angular/core';
import { ChatMessage, Conversation } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

constructor() { }

  getConversations() : Promise<Conversation[]> | null {
    /*
    return new Promise<Conversation[]>(resolve, reject){

    };
    */
    return null;
  }

  getChatMessages(conversation : Conversation) : Promise<ChatMessage[]> | null{

    return null;
  }

}
