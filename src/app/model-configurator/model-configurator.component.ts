import { Component, OnInit } from '@angular/core';
import { OptionService } from '../option.service';
import { NgFor, NgIf } from '@angular/common';
import { ConfigPipe } from '../config.pipe';
import { DataShareService } from '../data-share.service';
import { Option, Config } from '../types/common';

@Component({
  selector: 'model-configurator',
  standalone: true,
  imports: [NgFor, NgIf, ConfigPipe],
  templateUrl: './model-configurator.component.html',
  styleUrl: './model-configurator.component.scss'
})
export class ModelConfiguratorComponent implements OnInit {

  availableOptions?: Option;
  selectedConfig?: Config;

  constructor(private optionService: OptionService, private dataShare: DataShareService) {}

  ngOnInit(): void {
    if (this.dataShare.appState.model) {
      this.optionService
        .fetchOption(this.dataShare.appState.model.code)
        .subscribe(option => {
          this.availableOptions = option;
        });
    }
  }

  onChange(event: any) {
    const config = this.availableOptions?.configs.find(config => config.description === event.target.value);
    this.selectedConfig = config;
    this.dataShare.appState.config = this.selectedConfig;
  }

  onTowHitchChange(event: any) {
    this.dataShare.appState.towHitch = event.target.checked;
  }

  onYokeChange(event: any) {
    this.dataShare.appState.yoke = event.target.checked;
  }
}
