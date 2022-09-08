import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My First AGM Project';
  public lat = 0;
  public lng = 0;
  public latValue = this.lat;
  public lngValue = this.lng;

  constructor(private service: ConfigService) {}

  ngOnInit(): void {
    this.service.getLatData().subscribe((latdatajson) => {
      console.log(latdatajson);
    });
    this.service.getLngData().subscribe((lngdatajson) => {
      console.log(lngdatajson);
    });
  }

  clickJson() {
    console.log("send help");
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
