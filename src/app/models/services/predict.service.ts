import { Injectable } from '@angular/core';
import {ChartData, PredictData, PredictParams} from 'app/models/data/predict-data';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PredictService implements PredictData {
  private url = 'http://46.173.218.174/brew/analysys.php';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getPredict(params: PredictParams): Observable<ChartData> {
    return this.http.post<ChartData>(this.url, params, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  private errorHandl(error) {
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
