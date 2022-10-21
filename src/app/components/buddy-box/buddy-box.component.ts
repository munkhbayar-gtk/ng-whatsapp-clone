import { MessageTypingService } from './../../services/message-typing-service.service';
import {HostListener, Component, OnInit, ViewEncapsulation, ElementRef,ViewChild, Input } from '@angular/core';
import { Conversation } from 'src/app/data/data';

@Component({
  selector: 'app-buddy-box',
  templateUrl: './buddy-box.component.html',
  styleUrls: ['./buddy-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuddyBoxComponent implements OnInit {

  @Input('selected')
  selected: boolean = false;

  @Input('conversation')
  conversation: Conversation;

  @ViewChild("container")
  container : ElementRef<HTMLElement>
  parentWidth : number = 0;
  longText = "asdasd";


  constructor(private typingService : MessageTypingService) { }

  ngOnInit() {
    setTimeout(() => {
      //this.longText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    }, 2000);
  }

  ngAfterContentInit(){
    /*
    const parent = this.container?.nativeElement?.parentElement;
    console.log('width', parent?.offsetWidth);
    this.parentWidth = parent?.offsetWidth ?parent?.offsetWidth : 0 ;
    */
   console.log('conversation', this.conversation);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    const parentWidth = this.container?.nativeElement?.parentElement?.offsetWidth;
    console.log('width1', event.target.innerWidth, parentWidth);

  }

  getWidth(element: any) : number | undefined {
    const parentWidth = this.container?.nativeElement?.parentElement?.offsetWidth;
    return parentWidth;
  }

  _handleClick() {

  }
}
