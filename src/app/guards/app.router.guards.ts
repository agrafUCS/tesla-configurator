import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { DataShareService } from "../services/data-share.service";

export const canMatchStep2: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const dataShare = inject(DataShareService);

  if (dataShare.model && dataShare.color) {
    return true;
  }

  return inject(Router).parseUrl('/');
}

export const canMatchStep3: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const dataShare = inject(DataShareService);

  if (dataShare.config) {
    return true;
  }

  return inject(Router).parseUrl('/');
}
