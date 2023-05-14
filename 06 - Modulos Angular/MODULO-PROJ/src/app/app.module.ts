import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaModule } from './lista/lista.module'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ListViewComponent } from '.lista/list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
