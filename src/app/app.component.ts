import {Component} from '@angular/core';
import { TabMenuComponent } from './tab/tab.menu.component';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabMenuComponent, TabComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
