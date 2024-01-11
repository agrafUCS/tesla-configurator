import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Input() title = '';
  private _active = false;

  set active(isActive: boolean) {
    this._active = isActive;
  }

  get active() {
    return this._active;
  }
}
