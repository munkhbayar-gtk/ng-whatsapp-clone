import { NgModule } from "@angular/core";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {ScrollingModule} from '@angular/cdk/scrolling';

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
    MatIconModule
  ],

  declarations: [
  ]
})
export class MaterialModule { }
