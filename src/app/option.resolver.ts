import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Option } from "./types/common";
import { Observable } from "rxjs";
import { OptionService } from "./option.service";

@Injectable({
  providedIn: 'root'
})
export class OptionResolver implements Resolve<Option> {

  constructor(private optionService: OptionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Option | Observable<Option> | Promise<Option> {
    const modelId = route.paramMap.get('modelId') ?? '';
    return this.optionService.fetchOption(modelId);
  }

}
