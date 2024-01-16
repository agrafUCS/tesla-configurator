import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Option } from "../types/common";
import { Observable } from "rxjs";
import { OptionService } from "../services/option.service";

export const resolveOption: ResolveFn<Option> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Option | Observable<Option> | Promise<Option> => {
  const modelId = route.paramMap.get('modelId') ?? '';
  return inject(OptionService).fetchOption(modelId);
}
