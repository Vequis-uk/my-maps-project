import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First AGM Project';
  public lat = 53.95;
  public lng = -1.065;
  public latValue = 60;
  public lngValue = -1.065;

  updateLatitude(){
    this.lat = this.latValue;
  }
  updateLongitude(){
    this.lng = this.lngValue;
  }
}
