import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MenuComponent} from "./menu/menu.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    MenuComponent],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ViewModule { }
