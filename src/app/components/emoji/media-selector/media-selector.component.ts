import { Component, Input, OnInit } from '@angular/core';
import { EmojiData, EmojiDataService } from 'src/app/services/emoji-data.service';

@Component({
  selector: 'app-media-selector',
  templateUrl: './media-selector.component.html',
  styleUrls: ['./media-selector.component.scss']
})
export class MediaSelectorComponent implements OnInit {
  @Input('media-title')
  mediaTitle : string;

  @Input('media-index')
  mediaIndex : number = 0;

  @Input('media-datasource')
  ds : string

  private _data : EmojiData[];
  get data() : EmojiData[] { return this._data}
  constructor(private emojiDataService : EmojiDataService) { }

  ngOnInit() {
    if(this.ds == 'emoji'){
      this._data = this.emojiDataService.getEmojisByIndex(this.mediaIndex);
    }
  }
}
