import {Component} from '@angular/core';
import { TabMenuComponent } from './tab/tab.menu.component';
import { TabComponent } from './tab/tab.component';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabMenuComponent, TabComponent, ModelPickerComponent, ModelConfiguratorComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
