import { MessageTypingService } from './../../../services/message-typing-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

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

  constructor(public typingService : MessageTypingService) { }

  emojiState : boolean = false;

  mediaType : string='';

  @Input("sidenavWidth")
  sidenavWidth : number =0;

  ngOnInit() {
  }

  log(msg : any) {
    console.log('msg', msg);
  }

  /*
  @HostListener('document:click', ['$event'])
  @HostListener('document:keydown', ['$event'])
  _handleDocClick(event: Event) {
    console.log('event', event);
    const editor = this.typingService.editor;
    if(editor.contains(event.target as Node)){
      const selection = window.getSelection() ?? null;
    // Check if there is a selection (i.e. cursor in place)
      if (selection && selection.rangeCount !== 0) {
        // Store the original range
        const range = selection.getRangeAt(0) ?? null;
        // Clone the range
        const preCaretRange = range.cloneRange();
        // Select all textual contents from the contenteditable element
        preCaretRange.selectNodeContents(editor);
        // And set the range end to the original clicked position
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        // Return the text length from contenteditable start to the range end
        const position = preCaretRange.toString().length;
        console.log('cursor at: ', position);
        this.typingService.editorPosition = position ?? -1;
      }
    }
  }
  */
  _handleEnter(event : KeyboardEvent) {
    const keyCode = event.key.toLowerCase();
    if(keyCode == 'enter') {
      this.typingService.send();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  getTextContent(event: Event) : string{
    const div = event.target as HTMLDivElement;
    return div.textContent ?? '';
  }
}
