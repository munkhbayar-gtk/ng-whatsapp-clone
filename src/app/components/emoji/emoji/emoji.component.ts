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
  subIdx : number = 0;

  @Input("idx")
  idx : number = 0;

  @Input("scale")
  scale : number = 0.8;
  private _emojiData : EmojiData;

  get emojiData() : EmojiData {
    return this._emojiData;
  }

  constructor(private emojiService : EmojiDataService) { }

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
    console.log('redraw', this.idx, this.subIdx);
    const data = this.emojiService.getEmoji(this.idx, this.subIdx);
    this._emojiData = data !!;
  }

  url() : string {
    return `url(${this.emojiData.url})`;
  }
}
