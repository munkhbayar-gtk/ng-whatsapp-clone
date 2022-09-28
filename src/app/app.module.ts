import { BuddyBoxComponent } from './components/buddy-box/buddy-box.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { CreateChatPanelComponent } from './components/create-chat-panel/create-chat-panel.component';
import { NgInitDirective } from './directives/NgInit.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProfileBoxComponent,
    CreateChatPanelComponent,
    BuddyBoxComponent,

    NgInitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
