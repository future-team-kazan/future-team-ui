import { Injectable } from '@angular/core';

import { MapData } from 'app/models/data/map-data';
import { MapDataList } from 'app/models/data/map-data';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class MapService implements MapDataList {

  private apiUrl = 'http://iminister.site/rest/';
  private chartDataUrl = 'statistic.php';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<MapData[]> {
    return this.http.get<MapData[]>(this.apiUrl + this.chartDataUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // tslint:disable-next-line:no-console
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
