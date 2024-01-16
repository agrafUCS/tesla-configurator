import { Routes } from '@angular/router';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';
import { SummaryComponent } from './summary/summary.component';
import { ModelResolver } from './model.resolver';
import { OptionResolver } from './option.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'step1', pathMatch: 'full' },
  { path: 'step1', component: ModelPickerComponent, resolve: {
    models: ModelResolver
  }},
  { path: 'step2/:modelId', component: ModelConfiguratorComponent, resolve: {
    options: OptionResolver,
  } },
  { path: 'step3', component: SummaryComponent }
];
