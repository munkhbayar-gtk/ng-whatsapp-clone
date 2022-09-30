import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-media-panel',
  templateUrl: './media-panel.component.html',
  styleUrls: ['./media-panel.component.scss']
})
export class MediaPanelComponent implements OnInit {

  @Input("tab-icons")
  tabIcons: Array<string>=[];

  @Input("tab-texts")
  tabTexts: Array<string>=[];
  constructor() { }

  ngOnInit() {
  }

  max(a : number, b : number) {
    return Math.max(a,b);
  }

}
