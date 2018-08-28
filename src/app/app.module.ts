import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { GeracaoComponent } from './containers/geracao/geracao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EdicaoComponent,
    GeracaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
