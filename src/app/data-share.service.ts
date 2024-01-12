import { Injectable } from '@angular/core';
import { Model } from './model.service';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  selectedModel?: Model;

  constructor() { }
}
