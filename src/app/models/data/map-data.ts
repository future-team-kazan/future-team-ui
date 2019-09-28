import { Observable } from 'rxjs';

export interface MapData {
  year: number;
  deathrate: IndicatorData[];
  birthrate: IndicatorData[];
}

export type IndicatorData = (string | number)[] | null;


export abstract class MapDataList {
  abstract getAll(): Observable<MapData[]>;
}

