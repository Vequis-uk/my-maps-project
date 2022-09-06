import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClient,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4Hmt1h4MhUVjKYf85ATxGMwdxBCQ6aoA',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
