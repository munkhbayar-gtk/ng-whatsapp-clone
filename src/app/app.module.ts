import { EmojiComponent } from './components/emoji/emoji/emoji.component';
import { QuickActionMenuItemComponent } from './components/menu/quick-action-menu-item/quick-action-menu-item.component';
import { QuickActionMenuComponent } from './components/menu/quick-action-menu/quick-action-menu.component';

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
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import { NgInitDirective } from './directives/NgInit.directive';
import { ChatPanelComponent } from './components/chat/chat-panel/chat-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaPanelComponent } from './components/emoji/media-panel/media-panel.component';
import { ChatEmojiButtonComponent } from './components/chat/chat-emoji-button/chat-emoji-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProfileBoxComponent,
    CreateChatPanelComponent,
    BuddyBoxComponent,
    ChatPanelComponent,
    ChatMessageComponent,
    ChatEmojiButtonComponent,
    EmojiComponent,

    QuickActionMenuComponent,
    QuickActionMenuItemComponent,

    MatIconCircleButtonComponent,

    MediaPanelComponent,
    MediaSelectorComponent,
    TabMatIconComponent,

    NgInitDirective,

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
