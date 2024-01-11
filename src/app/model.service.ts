import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Color = {
  code: string,
  description: string,
  price: number
};

export type Model = {
  code: string,
  description: string,
  colors: Color[]
};

@Injectable({
  providedIn: 'root',
})
export class ModelService {

  constructor(private httpClient: HttpClient) { }

  fetchModels(): Observable<Model[]> {
    return this.httpClient.get<Model[]>('/models');
  }

}
