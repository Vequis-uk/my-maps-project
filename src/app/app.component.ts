import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
/* import { combineLatest } from 'rxjs'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First AGM Project';
  public lat = 0;
  public lng = 0;
  public latValue = this.lat;
  public lngValue = this.lng;

  constructor(private service: ConfigService) {}


  //this was combining two seperate service requests due to the layout of the 
  //db.json file, after combining them into one object 
/*   clickJson(): void {
    combineLatest([
      this.service.getLatData(),
      this.service.getLngData(),
    ]).subscribe(([lat, lng]) => {
      this.lat = lat.latvalue;
      this.lng = lng.lngvalue;
    });
  } */

  clickDavidTest(){
    this.service.getCoordData().subscribe((latdatajson) => {
      this.lat = latdatajson.latvalue;
    });
    this.service.getCoordData().subscribe((lngdatajson) => {
      this.lng = lngdatajson.lngvalue;
    });
  }

  updateLatitude() {
    this.lat = this.latValue;
  }
  updateLongitude() {
    this.lng = this.lngValue;
  }
}

//JSON server
//set long and lat in JSON then import it into the value
