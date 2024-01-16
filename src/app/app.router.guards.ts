import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { DataShareService } from "./data-share.service";

export const canMatchStep2: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const dataShare = inject(DataShareService);

  if (dataShare.appState.model && dataShare.appState.color) {
    return true;
  }

  return inject(Router).parseUrl('/');
}

export const canMatchStep3: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const dataShare = inject(DataShareService);

  if (dataShare.appState.config) {
    return true;
  }

  return inject(Router).parseUrl('/');
}
