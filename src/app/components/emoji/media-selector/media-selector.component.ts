import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-selector',
  templateUrl: './media-selector.component.html',
  styleUrls: ['./media-selector.component.scss']
})
export class MediaSelectorComponent implements OnInit {

  @Input('media-index')
  mediaIndex : number = 0;

  constructor() { }

  ngOnInit() {
  }

  private emojiTabMap = [
    [
      {82: []},
      {98: []},
      {106: []},
      {3: []},
      {83: []},
      {82: []},
    ]
  ]
}
