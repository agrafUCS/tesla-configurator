import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '@app-types/common';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private httpClient: HttpClient) { }

  fetchOption(modelCode: string): Observable<Option> {
    return this.httpClient.get<Option>(`/options/${modelCode}`);
  }
}
