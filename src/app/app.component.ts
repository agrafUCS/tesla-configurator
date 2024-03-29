import {Component, OnDestroy } from '@angular/core';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataShareService } from './services/data-share.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModelPickerComponent, ModelConfiguratorComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  constructor(public dataShare: DataShareService) {}

  ngOnDestroy(): void {
    this.dataShare.clearData();
  }
}
