import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectElementComponent } from './project-element.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    FloatingMenuComponent,
    ProjectElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
