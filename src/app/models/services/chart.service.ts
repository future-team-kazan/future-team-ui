import {Injectable} from '@angular/core';
import {ChartData, ChartDataInterface } from 'app/models/data/chart-data';
import { of as observableOf, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChartService implements ChartDataInterface {

  private apiUrl = 'http://iminister.site/rest/';
  private chartDataUrl = 'death.php';
  private chartDataUrl1 = 'death-prenatal.php';
  private chartDataUrl2 = 'death-wprenatal.php';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  getChartData(): Observable<ChartData> {
    return this.http.get<ChartData>(this.apiUrl + this.chartDataUrl1, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getChartData2(): Observable<ChartData> {
    return this.http.get<ChartData>(this.apiUrl + this.chartDataUrl2, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
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
    return throwError(errorMessage);
  }

}
