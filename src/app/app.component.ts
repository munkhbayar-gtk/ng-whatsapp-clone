import { Component, Input, ElementRef, ViewChild,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-whatsapp-clone';

  @ViewChild('sideBar')
  sidebar : ElementRef<HTMLElement>;

  calculatedWidth : number  = 0;
  getWidth(element: any) : number  {
    const parentWidth = element?.offsetWidth;
    return parentWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize(event : any) {
    this.calculatedWidth = this.sidebar.nativeElement.clientWidth; //this.getWidth(this.sidebar.nativeElement);
  }
}
