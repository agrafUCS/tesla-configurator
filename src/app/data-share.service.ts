import { Injectable } from '@angular/core';
import { AppState, Color, Config, Model } from './types/common';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private _appState: AppState = {} as AppState;

  constructor() {
    const storedState = localStorage.getItem('appState');

    if (storedState) {
      this._appState = JSON.parse(storedState);
    }
  }

  private persistAppState() {
    localStorage.setItem('appState', JSON.stringify(this.appState));
  }

  setModel(model: Model | undefined) {
    this._appState.model = model;
    this.persistAppState();
  }

  setColor(color: Color | undefined) {
    this._appState.color = color;
    this.persistAppState();
  }

  setConfig(config: Config | undefined) {
    this._appState.config = config;
    this.persistAppState();
  }

  setTowHitch(towHitch: boolean) {
    this._appState.towHitch = towHitch;
    this.persistAppState();
  }

  setYoke(yoke: boolean) {
    this._appState.yoke = yoke;
    this.persistAppState();
  }

  clearData() {
    localStorage.removeItem('appState');
  }

  get model() {
    return this._appState.model;
  }

  get color() {
    return this._appState.color;
  }

  get config() {
    return this._appState.config;
  }

  get towHitch() {
    return this._appState.towHitch;
  }

  get yoke() {
    return this._appState.yoke;
  }

  get appState() {
    return this._appState;
  }
}
