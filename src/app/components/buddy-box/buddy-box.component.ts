import {HostListener, Component, OnInit, ViewEncapsulation, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-buddy-box',
  templateUrl: './buddy-box.component.html',
  styleUrls: ['./buddy-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuddyBoxComponent implements OnInit {

  @ViewChild("container")
  container : ElementRef<HTMLElement>
  parentWidth : number = 0;
  longText = "asdasd";

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.longText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    }, 2000);
  }

  ngAfterContentInit(){
    /*
    const parent = this.container?.nativeElement?.parentElement;
    console.log('width', parent?.offsetWidth);
    this.parentWidth = parent?.offsetWidth ?parent?.offsetWidth : 0 ;
    */
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    const parentWidth = this.container?.nativeElement?.parentElement?.offsetWidth;
    console.log('width', event.target.innerWidth, parentWidth);

  }

  getWidth(element: any) : number | undefined {
    const parentWidth = this.container?.nativeElement?.parentElement?.offsetWidth;
    return parentWidth;
  }

}
