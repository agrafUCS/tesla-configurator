import { Routes } from '@angular/router';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';

export const routes: Routes = [
  { path: 'step1', component: ModelPickerComponent },
  { path: 'step2', component: ModelConfiguratorComponent }
];
