import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First AGM Project';
  public lat = 53.95;
  public lng = -1.065;
  public latValue = this.lat;
  public lngValue = this.lng;

  constructor(private service: ConfigService) {}

  updateLatitude() {
    this.lat = this.latValue;
  }
  updateLongitude() {
    this.lng = this.lngValue;
  }

  displayMapData(){
    console.log(ConfigService)
  }
}

//JSON server
//set long and lat in JSON then import it into the value
