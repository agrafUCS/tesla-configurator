import { Routes } from '@angular/router';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'step1', component: ModelPickerComponent },
  { path: 'step2', component: ModelConfiguratorComponent },
  { path: 'step3', component: SummaryComponent }
];
