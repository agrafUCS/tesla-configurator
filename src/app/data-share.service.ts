import { Injectable } from '@angular/core';
import { AppState } from './types/common';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  appState: AppState = {} as AppState;

  constructor() {}

}
