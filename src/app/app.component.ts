import { MessageTypingService } from './services/message-typing-service.service';
import { Component, Input, ElementRef, ViewChild,HostListener } from '@angular/core';
import { Conversation } from './data/data';
import { MessageDataService } from './services/message-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedConversationIndex = -1;
  constructor(private dataService: MessageDataService, private typingService : MessageTypingService) {}

  textMsg = "Mbr";
  title = 'ng-whatsapp-clone';

  @ViewChild('sideBar')
  sidebar : ElementRef<HTMLElement>;

  conversations: Conversation[];

  calculatedWidth : number  = 0;
  getWidth(element: any) : number  {
    const parentWidth = element?.offsetWidth;
    return parentWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize(event : any) {
    this.calculatedWidth = this.sidebar.nativeElement.clientWidth; //this.getWidth(this.sidebar.nativeElement);
  }

  ngAfterViewInit(){
    this.dataService.getConversations().then((conversations) => {
      this.conversations = conversations;
    })
  }

  _handleConversationClick(event: Event, conversation : Conversation) {
    console.log(conversation);
    this.typingService.selectedConversation = conversation;
  }
}
