import { MessageTypingService } from './../../../services/message-typing-service.service';
import { EmojiData } from './../../../services/emoji-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { EmojiDataService } from 'src/app/services/emoji-data.service';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  @Input("subIdx")
  subIdx : number = -1;

  @Input("idx")
  idx : number = -1;

  @Input("scale")
  scale : number = 0.8;

  @Input("emoji-data")
  eData : EmojiData

  private _emojiData : EmojiData;

  get emojiData() : EmojiData {
    return this._emojiData;
  }

  constructor(private emojiService : EmojiDataService,
    private typingService: MessageTypingService) { }

  ngOnInit() {
    this.redraw();
  }

  ngAfterViewInit(){
    this.redraw();
  }

  ngOnChanges() {
    this.redraw();
  }
  private redraw() {
    if(this.idx < 0) {
      console.log('redraw by input data', this.idx, this.subIdx);
      this._emojiData = this.eData;
    }else{
      console.log('redraw by indices', this.idx, this.subIdx);
      const data = this.emojiService.getEmoji(this.idx, this.subIdx);
      this._emojiData = data !!;
    }
  }

  url() : string {
    return `url(${this.emojiData.url})`;
  }

  _handleClick(event : Event) {
    //const html = this.emojiService.html(this._emojiData)
    //this.typingService.addNode(html);
    this.typingService.addText(this._emojiData.emoji);
  }
}
