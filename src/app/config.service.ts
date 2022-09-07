import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';
import mapData from '../../db.json';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
    this.getMapData().subscribe((mapData) => {
      console.log(mapData);
    });
  }
  public getMapData(): Observable<any> {
    return this.http.get('../../db.json');
  }
}
