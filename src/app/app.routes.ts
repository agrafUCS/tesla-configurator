import { Routes } from '@angular/router';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';
import { SummaryComponent } from './summary/summary.component';
import { resolveModel } from './resolvers/model.resolver';
import { resolveOption } from './resolvers/option.resolver';
import { canMatchStep2, canMatchStep3 } from './guards/app.router.guards';

export const routes: Routes = [
  { path: '', redirectTo: 'step1', pathMatch: 'full' },
  {
    path: 'step1', component: ModelPickerComponent, resolve: {
      models: resolveModel
    }
  },
  {
    path: 'step2/:modelId', component: ModelConfiguratorComponent, resolve: {
      options: resolveOption,
    },
    canMatch: [canMatchStep2]
  },
  { path: 'step3', component: SummaryComponent, canMatch: [canMatchStep2, canMatchStep3] },
  { path: '**', redirectTo: 'step1', pathMatch: 'full' }
];
