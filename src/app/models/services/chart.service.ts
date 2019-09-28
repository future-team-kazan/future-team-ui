import {Injectable} from '@angular/core';
import {ChartData, ChartDataInterface } from 'app/models/data/chart-data';
import { of as observableOf, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChartService implements ChartDataInterface {

  private apiUrl = 'https://iminister.site/api/';
  private chartDataUrl = 'getalldata.php';

  private chartDataFile = 'app/pages/charts/models/services/pie-chart.json';

  // private data = {
  //   labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
  //   dataset: [{
  //     label: 'Доходы',
  //     data: [65, 59, 80]
  //   }]
  // };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  // getItems(): Observable<ChartData> {
  //   return observableOf(this.data);
  // }


  getChartData(): Observable<ChartData> {
    return this.http.get<ChartData>(this.apiUrl + this.chartDataUrl, this.httpOptions)
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
