import { NgFor } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tab-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tab.menu.component.html',
  styleUrl: './tab.menu.component.scss'
})
export class TabMenuComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    const firstTab = this.tabs.first;

    if (firstTab) {
      this.selectTab(firstTab);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
}
