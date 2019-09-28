import { Observable } from 'rxjs';

export interface ChartDataItem {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  dataset: ChartDataItem[];
}

export abstract class ChartDataInterface {
  // abstract getItems(): Observable<ChartData>;
  abstract getChartData(): Observable<ChartData>;
}
