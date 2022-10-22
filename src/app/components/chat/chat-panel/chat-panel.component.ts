import { Conversation } from './../../../data/data';
import { ChatMessageComponent } from './../chat-message/chat-message.component';
import { MessageTypingService } from './../../../services/message-typing-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MessageDataService } from 'src/app/services/message-data.service';
import { ChatMessage } from 'src/app/data/data';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss'],
  animations: [
    trigger('emojiArea', [
      state('true', style({ 'min-height': '*', height: '*'})),
      state('false', style({ 'min-height': '0px', height: '0px'})),
      transition('true => false', [
        style({'min-height': '*', height: '0px'}),
        animate('200ms ease-out', style({'min-height': '0px', height: '0px'}))
      ]),
      transition('false => true', [
        style({'min-height': '0px'}),
        animate('200ms ease-in', style({'min-height': '*', height: '*'}))
      ])
    ]),

    trigger('emojiStateExpanded', [
      state('true', style({ 'width': '220px'})),
      state('false', style({ width: '78px'})),
      transition('true => false', animate('200ms ease-out')),
      transition('false => true', animate('200ms ease-in'))
    ]),
    trigger('emojiState', [
      state('true', style({ width: '*', 'margin-right':'8px','margin-left':'8px', opacity: 1})),
      state('false', style({ width: '0px', 'margin-right':'0px','margin-left':'0px', opacity: 0})),
      transition('false<=>true', [
        animate('200ms ease-in')
      ])
    ]),
    trigger('emojiState1', [
      state('true', style({ 'width': '*'})),
      state('false', style({ width: '0px'})),
      transition('true=>false', [
        style({ width: '*'}),
        animate('200ms ease-out', style({width:'0px', opacity: 1}))
      ]),
      transition('false=>true', [
        style({width: '0px'}),
        animate('200ms ease-in', style({ width: '*', opacity: 0}))
      ])
    ]),
  ]
})
export class ChatPanelComponent implements OnInit {

  @ViewChild('scroller')
  scroller: ElementRef<HTMLElement>;

  messages: ChatMessage[] = [];

  @Input('conversationIndex')
  conversationIndex = -1;

  get conversation() : Conversation{
    return this.typingService.selectedConversation;
  }

  constructor(public typingService : MessageTypingService, public dataMessageService : MessageDataService) { }

  ngOnChanges(changes: any){
    if(changes.conversationIndex) {
      if(changes.conversationIndex.previousValue !== changes.conversationIndex.currentValue){
        this.refresh();
      }
    }
  }

  refresh() {
    console.log('conv', this.typingService.selectedConversation);
    this.dataMessageService
      .getChatMessages(this.typingService.selectedConversation)
      .then((messages) => {
        this.messages = messages;
        this.onMessageAdded();
      })
  }
  emojiState : boolean = false;

  mediaType : string='';

  @Input("sidenavWidth")
  sidenavWidth : number =0;

  ngOnInit() {
  }

  _handleEnter(event : KeyboardEvent) {
    const keyCode = event.key.toLowerCase();
    if(keyCode == 'enter') {
      event.preventDefault();
      event.stopPropagation();

      this.send();
    }
  }

  getTextContent(event: Event) : string{
    const div = event.target as HTMLDivElement;
    return div.textContent ?? '';
  }

  send() : void{
    this.typingService.send().then((chatMessage)=>{
      this.messages.push(chatMessage);
      //console.log('messages', this.messages);
      //this.refresh();
      this.onMessageAdded();
    });
  }

  private onMessageAdded() {
    window.setTimeout(()=>{
      this.scrollToBottom();
    }, 10);
  }
  private scrollToBottom() {
    const scroller = this.scroller.nativeElement;
    const children = scroller.children;
    const lastChild = children.item(children.length - 1); //scroller.lastChild;
    lastChild?.scrollIntoView({'behavior': 'smooth'});
  }
}
