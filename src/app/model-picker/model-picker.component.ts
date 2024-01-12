import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Color, Model, ModelService } from '../model.service';
import { DataShareService } from '../data-share.service';

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

  constructor(private modelService: ModelService, private dataShare: DataShareService) {}

  ngOnInit(): void {
    console.log('OnInit Model Picker');
    this.modelService.fetchModels().subscribe(models => this.init(models));
  }

  init(models: Model[]) {
    console.log('Init Model Picker');
    this.models = models;
  }

  onChangeModel(selectedModelEvent: any) {
    this.model = this.models.find(model => model.description === selectedModelEvent.target.value);
    console.log(this.model);

    if (this.model) {
      this.dataShare.selectedModel = this.model;
      this.selectedColor = this.model?.colors?.[0];
    } else {
      this.dataShare.selectedModel = undefined;
      this.model = undefined;
      this.selectedColor = undefined;
    }
  }

  onChangeColor(selectedColorEvent: any) {
    this.selectedColor = this.model?.colors.find(color => color.description === selectedColorEvent.target.value);
  }

  get imageSource() {
    return `https://interstate21.com/tesla-app/images/${this.model?.code}/${this.selectedColor?.code}.jpg`;
  }

}
