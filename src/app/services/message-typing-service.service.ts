import { ChatMessage } from 'src/app/data/data';
import { HostListener, Injectable } from '@angular/core';
import { Conversation } from '../data/data';
import { MessageDataService } from './message-data.service';

@Injectable({
  providedIn: 'root'
})
export class MessageTypingService {

  text : string = '';

  selectedConversation: Conversation;
  editor: HTMLInputElement;
  editorPosition : number = 0;
  constructor(private messageDataService: MessageDataService) { }

  handleInputFocus() {
  }

  addNode(node : Element) {
    if(!node ) return;
    //this.text = `${this.text}${txt}`;
    this.editor.focus();
    const sel = window.getSelection();
    console.log('node', node);
    if(sel?.getRangeAt && sel.rangeCount) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(node);
      sel.collapse(sel.focusNode, 0);
    }
  }
  addText(txt : string) {
    if(txt && txt.length == 0) return;
    //this.text = `${this.text}${txt}`;
    const startIndex = this.editor.selectionStart ??this.text.length;
    const endIndex = this.editor.selectionEnd ?? this.text.length;

    const start = this.text.substring(0, startIndex);
    const end = this.text.substring(endIndex);

    this.text = `${start}${txt}${end}`;

    //set select start index at the position

    //this.editor.selectionStart = startIndex;
    //this.editor.selectionEnd = startIndex;
    this.editor.focus();
    window.setTimeout(()=>{
      this.editor.setSelectionRange(startIndex + txt.length, startIndex + txt.length);
    }, 2);
  }

  send() : Promise<ChatMessage>{
    const retPromise = new Promise<ChatMessage>((resolve, reject)=>{
      this.messageDataService.sendMessage(this.selectedConversation, this.text).then((chatMessage) => {
        this.text = "";
        resolve(chatMessage);
      });
    })
    return retPromise;
  }
}
