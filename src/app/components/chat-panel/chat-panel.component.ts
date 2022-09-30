import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

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
      state('true', style({ })),
      state('false', style({ })),
      transition('true => false', [
        style({ width: '0px'}),
        animate('4000ms ease-in', style({width:'*', opacity: 1}))
      ]),
      transition('false => true', [
        style({width: '*'}),
        animate('200ms ease-out', style({ width: '0px', opacity: 0}))
      ])
    ]),
  ]
})
export class ChatPanelComponent implements OnInit {

  textToSend = "";
  constructor() { }

  emojiState : boolean = false;

  mediaType : string='';

  @Input("sidenavWidth")
  sidenavWidth : number =0;

  ngOnInit() {
  }

  log(msg : any) {
    console.log('msg', msg);
  }
}
