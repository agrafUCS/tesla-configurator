import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Model } from "./types/common";
import { Observable } from "rxjs";
import { ModelService } from "./model.service";

@Injectable({
  providedIn: 'root'
})
export class ModelResolver implements Resolve<Model[]> {

  constructor(private modelService: ModelService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Model[] | Observable<Model[]> | Promise<Model[]> {
    return this.modelService.fetchModels();
  }

}
