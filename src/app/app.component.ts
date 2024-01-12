import {Component} from '@angular/core';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModelPickerComponent, ModelConfiguratorComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedModelId?: string;

  handleModelSelection(event: any) {
    console.log('handle selection')
  }
}
