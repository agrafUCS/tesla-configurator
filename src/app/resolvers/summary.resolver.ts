import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Summary } from '@app-types/common';
import { DataShareService } from '@services/data-share.service';
import { PriceService } from '@services/price.service';

export const resolveSummary: ResolveFn<Summary> = (route, state) => {
  const appState = inject(DataShareService).appState;
  const total = inject(PriceService).getTotalCost(appState);
  return {
    ...appState,
    total
  }
};
