import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Color, Model, ModelService } from '../model.service';

@Component({
  selector: 'model-picker',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './model-picker.component.html',
  styleUrl: './model-picker.component.scss'
})
export class ModelPickerComponent implements OnInit {
  models: Model[] = [];
  selectedModel?: Model;
  selectedColor?: Color;

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    console.log('OnInit Model Picker');
    this.modelService.fetchModels().subscribe(models => this.init(models));
  }

  init(models: Model[]) {
    console.log('Init Model Picker');
    this.models = models;
  }

  onChangeModel(selectedModelEvent: any) {
    const model = this.models.find(model => model.description === selectedModelEvent.target.value);

    if (model) {
      this.selectedModel = model;
      this.selectedColor = this.selectedModel?.colors?.[0];
    } else {
      this.selectedModel = undefined;
      this.selectedColor = undefined;
    }
  }

  onChangeColor(selectedColorEvent: any) {
    this.selectedColor = this.selectedModel?.colors.find(color => color.description === selectedColorEvent.target.value);
  }

  get imageSource() {
    return `https://interstate21.com/tesla-app/images/${this.selectedModel?.code}/${this.selectedColor?.code}.jpg`;
  }

}
