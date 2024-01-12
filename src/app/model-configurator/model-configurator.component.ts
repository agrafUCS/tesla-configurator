import { Component, OnInit } from '@angular/core';
import { Config, Option, OptionService } from '../option.service';
import { NgFor, NgIf } from '@angular/common';
import { ConfigPipe } from '../config.pipe';
import { DataShareService } from '../data-share.service';

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
    if (this.dataShare.selectedModel) {
      this.optionService
        .fetchOption(this.dataShare.selectedModel.code)
        .subscribe(option => this.availableOptions = option);
    }
  }

  onChange(event: any) {
    const config = this.availableOptions?.configs.find(config => config.description === event.target.value);
    this.selectedConfig = config;
  }
}
