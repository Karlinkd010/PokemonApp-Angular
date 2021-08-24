import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from 'primeng/splitter'
import {CarouselModule} from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    PanelModule,
    SplitterModule,
    BrowserAnimationsModule,
    CarouselModule
  ]

})
export class PrimeNgModule { }
