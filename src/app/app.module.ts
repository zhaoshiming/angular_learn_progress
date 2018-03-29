import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './components/test/test.component';
import { ErrComponent } from './pages/err/err.component';
import { AppRoutingModule } from './app.routing';
import { SharedHeadComponent } from './components/shared-head/shared-head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    ErrComponent,
    SharedHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
