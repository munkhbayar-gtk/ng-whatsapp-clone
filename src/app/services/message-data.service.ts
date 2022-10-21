import { Injectable } from '@angular/core';
import { User, ChatMessage, Conversation, Reaction } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  private loggedUser : User;

  constructor() {
    this.loggedUser = {
      id: 1000,
      firstname: 'Munkhbayar-gtk',
      lastname: 'Gombo',
      username: 'test@lgn.com',
      avatarUrl: '../../assets/images/avatar.jpg'
    }
    this.messages = this.messages.sort((a,b)=>a.date.getTime() - b.date.getTime())
   }

  getConversations() : Promise<Conversation[]>  {
    return new Promise<Conversation[]>((resolve, reject)=>{
       const mp = new Map<number, ChatMessage>();
       this.messages.forEach(m =>{
          mp.set(m.buddyId, m)
       });

       const ret = this.users.map(user=>{
        const conversation = this.convert(user);
        conversation.user = user;
        conversation.lastMessage = mp.get(conversation.user.id);
        return conversation;
       });

       resolve(ret)
    });
  }
  private convert(user: User) : Conversation {
    return {
      user: user,
      lastMessage : null,
    }
  }

  getChatMessages(conversation : Conversation) : Promise<ChatMessage[]>{
    return new Promise<ChatMessage[]>((resolve, reject)=>{
        const buddyId = conversation.user.id;
        resolve(this.messages.filter(msg => msg.buddyId === buddyId));
    });
  }

  sendReaction(chatMessage : ChatMessage, reactionType: string) : Promise<Reaction>{
    return new Promise<Reaction>((resolve, reject)=>{
       const reaction : Reaction = {
          id : 2,
          type: reactionType,
          senderId: this.loggedUser.id
       }
       chatMessage.reactions.push(reaction);
       resolve(reaction)
    })
  }
  deleteMessage(chatMessage : ChatMessage) : Promise<void> {
    return new Promise<void>((resolve, reject)=>{
      const index = this.messages.indexOf(chatMessage);
      this.messages.splice(index, 1);
      resolve()
    });
  }
  sendMessage(conversation : Conversation, text: string) : Promise<ChatMessage> {
    return new Promise<ChatMessage>((resolve, reject)=>{
      const chatMessage : ChatMessage = {
        id: 1,
        dir: 's',
        buddyId: conversation.user.id,
        text: text,
        date: new Date(),
        isYesNo: false,
        answered: false,
        reactions: []
      };
      this.messages.push(chatMessage);
      conversation.lastMessage = chatMessage;
      resolve(chatMessage)
    })
  }

  private users : User[] = [
    {
      id: 1,
      firstname: 'Jordan',
      lastname: 'Micheal',
      username: 'mj.whatsapp.clone',
      avatarUrl: ''
    },
    {
      id: 3,
      firstname: 'Kobe',
      lastname: 'Bryant',
      username: 'kb.whatsapp.clone',
      avatarUrl: ''
    },
    {
      id: 4,
      firstname: 'Lebron',
      lastname: 'James',
      username: 'lbn.whatsapp.clone',
      avatarUrl: ''
    },
    {
      id: 5,
      firstname: 'Steph',
      lastname: 'Curry',
      username: 'curry.whatsapp.clone',
      avatarUrl: ''
    },
    {
      id: 6,
      firstname: 'Kevin',
      lastname: 'Durant',
      username: 'snake.whatsapp.clone',
      avatarUrl: ''
    }
  ]
  private messages : ChatMessage[] = [
    {
      id: 1,
      dir: 'r',
      buddyId: 1,
      text: 'Lorem 20',
      date: new Date('2022-10-15 11:00:00'),
      isYesNo: false,
      answered: false,
      reactions: [
        {
          id: 1,
          type: 'smile',
          senderId: 1
        },
        {
          id: 2,
          type: 'heart',
          senderId: 2
        },
        {
          id: 3,
          type: 'haha',
          senderId: 3
        }
      ]
    },
    {
      id: 2,
      dir: 's',
      buddyId: 1,
      text: 'Lorem 22',
      date: new Date('2022-10-15 11:10:00'),
      isYesNo: false,
      answered: false,
      reactions: [
        {
          id: 11,
          type: 'smile',
          senderId: 1
        },
        {
          id: 21,
          type: 'heart',
          senderId: 2
        },
        {
          id: 31,
          type: 'haha',
          senderId: 3
        }
      ]
    },
    {
      id: 3,
      dir: 'r',
      buddyId: 2,
      text: 'Lorem 23',
      date: new Date('2022-10-15 11:15:00'),
      isYesNo: false,
      answered: false,
      reactions: [
        {
          id: 31,
          type: 'haha',
          senderId: 3
        }
      ]
    },
    {
      id: 4,
      dir: 's',
      buddyId: 2,
      text: 'Lorem 25',
      date: new Date('2022-10-15 11:16:00'),
      isYesNo: false,
      answered: false,
      reactions: [],
    }
  ]
}
