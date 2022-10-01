import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatSliderModule} from '@angular/material/slider';

    /*,
    MatSidenavModule,
    MatToolbarModule,
    ,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    ScrollingModule
    */
@NgModule({
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    ScrollingModule
  ],

  declarations: [
  ]
})
export class MaterialModule { }
