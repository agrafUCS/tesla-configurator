import { Injectable } from '@angular/core';
import { AppState } from './types/common';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  getTotalCost(appState: AppState) {
    let total = 0;
    total += appState.config?.price ?? 0;
    total += appState.color?.price ?? 0;

    if (appState.towHitch) {
      total += 1000;
    }

    if (appState.yoke) {
      total += 1000;
    }

    return total;
  }

}
