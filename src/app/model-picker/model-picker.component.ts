import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model.service';
import { DataShareService } from '../data-share.service';
import { Color, Model } from '../types/common';
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

  onChangeModel(selectedModelEvent: any) {
    this.model = this.models.find(model => model.description === selectedModelEvent.target.value);

    if (this.model) {
      this.selectedColor = this.model?.colors?.[0];
    } else {
      this.model = undefined;
      this.selectedColor = undefined;
    }
    this.dataShare.setModel(this.model);
    this.dataShare.setColor(this.selectedColor);
  }

  onChangeColor(selectedColorEvent: any) {
    this.selectedColor = this.model?.colors.find(color => color.description === selectedColorEvent.target.value);
    this.dataShare.setColor(this.selectedColor);
  }

  get imageSource() {
    return `https://interstate21.com/tesla-app/images/${this.model?.code}/${this.selectedColor?.code}.jpg`;
  }

}
