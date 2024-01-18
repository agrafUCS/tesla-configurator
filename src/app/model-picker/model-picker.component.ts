import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataShareService } from '@services/data-share.service';
import { Color, Model } from '@app-types/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'model-picker',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './model-picker.component.html',
  styleUrl: './model-picker.component.scss'
})
export class ModelPickerComponent implements OnInit {
  models: Model[] = [];

  model?: Model;

  selectedColor?: Color;

  constructor(private route: ActivatedRoute, private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.init(this.route.snapshot.data['models']);
    this.model = this.dataShare.model;
    this.selectedColor = this.dataShare.color;
  }

  init(models: Model[]) {
    this.models = models;
  }

  onChangeModel(selectedModelEvent: Event) {
    const target: HTMLSelectElement | null = selectedModelEvent.target as HTMLSelectElement;

    // Reset data
    if (target.selectedOptions.namedItem('noModelOption')) {
      this.dataShare.clearData();
    } else if (!target.selectedOptions.namedItem(this.model?.code ?? '')) {
      this.dataShare.clearData();
    }

    this.model = this.models.find(model => model.description === target?.value);

    if (this.model) {
      this.selectedColor = this.model?.colors?.[0];
    } else {
      this.model = undefined;
      this.selectedColor = undefined;
    }
    this.dataShare.setModel(this.model);
    this.dataShare.setColor(this.selectedColor);
  }

  onChangeColor(selectedColorEvent: Event) {
    const target: HTMLSelectElement | null = selectedColorEvent.target as HTMLSelectElement;
    this.selectedColor = this.model?.colors.find(color => color.description === target?.value);
    this.dataShare.setColor(this.selectedColor);
  }

  get imageSource() {
    return `https://interstate21.com/tesla-app/images/${this.model?.code}/${this.selectedColor?.code}.jpg`;
  }

}
