import { Observable } from 'rxjs';

export interface ChartDataItem {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataItem[];
}

export interface PredictParams {
  REG: string;
  X1: number;
  X2: number;
  X3: number;
  X4: number;
  X5: number;
  Y1: number;
  Y2: number;
  Y3: number;
  Y4: number;
}

export abstract class PredictData {
  abstract getPredict(params: PredictParams): Observable<ChartData>
}
