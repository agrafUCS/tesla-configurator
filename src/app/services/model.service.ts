import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '@app-types/common';

@Injectable({
  providedIn: 'root',
})
export class ModelService {

  constructor(private httpClient: HttpClient) { }

  fetchModels(): Observable<Model[]> {
    return this.httpClient.get<Model[]>('/models');
  }

}
