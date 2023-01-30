import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentProdComponent } from './environments/environment.prod/environment.prod.component';
import { EnvironmentComponent } from './environments/environment/environment.component';

//modules
import { PagesModule } from './pages/pages.module';

//Components

@NgModule({
  declarations: [AppComponent, EnvironmentProdComponent, EnvironmentComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
