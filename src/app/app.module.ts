
import { MatIconCustomModule } from './mat-icon-custom.module';
import { TabMatIconComponent } from './components/tab-mat-icon/tab-mat-icon.component';
import { MediaSelectorComponent } from './components/emoji/media-selector/media-selector.component';
import { MatIconCircleButtonComponent } from './components/mat-icon-circle-button/mat-icon-circle-button.component';
import { BuddyBoxComponent } from './components/buddy-box/buddy-box.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { CreateChatPanelComponent } from './components/create-chat-panel/create-chat-panel.component';
import { NgInitDirective } from './directives/NgInit.directive';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaPanelComponent } from './components/emoji/media-panel/media-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProfileBoxComponent,
    CreateChatPanelComponent,
    BuddyBoxComponent,
    ChatPanelComponent,
    MatIconCircleButtonComponent,

    MediaPanelComponent,
    MediaSelectorComponent,
    TabMatIconComponent,

    NgInitDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    MatIconCustomModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
