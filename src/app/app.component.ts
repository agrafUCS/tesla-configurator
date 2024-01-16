import {Component, OnDestroy, OnInit} from '@angular/core';
import { ModelPickerComponent } from './model-picker/model-picker.component';
import { ModelConfiguratorComponent } from './model-configurator/model-configurator.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataShareService } from './data-share.service';
import { AppState } from './types/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModelPickerComponent, ModelConfiguratorComponent, RouterLink, RouterOutlet, NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  appState?: AppState;

  constructor(private dataShare: DataShareService) {}

  ngOnInit() {
    this.appState = this.dataShare.appState;
  }

  ngOnDestroy(): void {
    this.dataShare.clearData();
  }
}
