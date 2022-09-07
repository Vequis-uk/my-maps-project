import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  
  getConfig()ConfigService.Observable:<any>() => {
    this.http.get('../../db.json').subscribe;
  }

}

