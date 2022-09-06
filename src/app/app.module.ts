import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4Hmt1h4MhUVjKYf85ATxGMwdxBCQ6aoA',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
