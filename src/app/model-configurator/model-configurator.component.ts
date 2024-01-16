import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ConfigPipe } from '../config.pipe';
import { DataShareService } from '../data-share.service';
import { Option, Config } from '../types/common';
import { ActivatedRoute } from '@angular/router';

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
  towHitch = false;
  yoke = false;

  constructor(private route: ActivatedRoute, private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.availableOptions = this.route.snapshot.data['options'];
    this.selectedConfig = this.dataShare.appState.config;
    this.towHitch = this.dataShare.appState.towHitch;
    this.yoke = this.dataShare.appState.yoke;
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
