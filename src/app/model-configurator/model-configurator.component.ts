import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ConfigPipe } from '@resolvers/config.pipe';
import { DataShareService } from '@services/data-share.service';
import { Option, Config } from '@app-types/common';
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
    this.selectedConfig = this.dataShare.config;
    this.towHitch = this.dataShare.towHitch;
    this.yoke = this.dataShare.yoke;
  }

  onChange(event: Event) {
    const target: HTMLSelectElement | null = event.target as HTMLSelectElement;
    const config = this.availableOptions?.configs.find(config => config.description === target?.value);
    this.selectedConfig = config;
    this.dataShare.setConfig(this.selectedConfig);
  }

  onTowHitchChange(event: Event) {
    const target: HTMLInputElement | null = event.target as HTMLInputElement;
    this.dataShare.setTowHitch(target?.checked);
  }

  onYokeChange(event: Event) {
    const target: HTMLInputElement | null = event.target as HTMLInputElement;
    this.dataShare.setYoke(target?.checked);
  }
}
