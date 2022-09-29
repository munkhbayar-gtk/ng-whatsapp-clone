import { Component, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-mat-icon-circle-button',
  templateUrl: './mat-icon-circle-button.component.html',
  styleUrls: ['./mat-icon-circle-button.component.scss']
})
export class MatIconCircleButtonComponent implements OnInit {

  @Input("mat-icon-text")
  iconText : string = "search"

  pressed : boolean = false;

  constructor() { }

  ngOnInit() {
  }



}
