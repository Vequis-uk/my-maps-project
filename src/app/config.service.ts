import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }
  public getLatData(): Observable<any> {
    return this.http.get("http://localhost:3000/latJson");
  }
  public getLngData(): Observable<any> {
    return this.http.get("http://localhost:3000/lngJson");
  }
}
