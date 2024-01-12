import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Config = {
  id: number,
  description: string,
  range: number,
  speed: number,
  price: number
};

export type Option = {
  configs: Config[],
  towHitch: boolean,
  yoke: boolean
};

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private httpClient: HttpClient) { }

  fetchOption(modelCode: string): Observable<Option> {
    return this.httpClient.get<Option>(`/options/${modelCode}`);
  }
}
