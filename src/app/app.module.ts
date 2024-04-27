import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './components/message/message.component';
import { ReactionComponent } from './components/reaction/reaction.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MessageComponent
  ],
  providers: [],
  bootstrap: [AppComponent] // Include AppComponent in the bootstrap array
})
export class AppModule { }
