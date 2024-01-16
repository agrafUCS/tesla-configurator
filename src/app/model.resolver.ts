import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Model } from "./types/common";
import { Observable } from "rxjs";
import { ModelService } from "./model.service";

export const resolveModel: ResolveFn<Model[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Model[] | Observable<Model[]> | Promise<Model[]> => {
  return inject(ModelService).fetchModels();
}
