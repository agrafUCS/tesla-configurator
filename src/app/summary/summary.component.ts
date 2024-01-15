import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ConfigPipe } from '../config.pipe';
import { PriceService } from '../price.service';
import { AppState } from '../types/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NgIf, ConfigPipe, CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  appState?: AppState;
  total = 0;


  constructor(private dataShare: DataShareService, private price: PriceService) {}

  ngOnInit(): void {
    this.appState = this.dataShare.appState;
    this.total = this.price.getTotalCost(this.appState);
  }

}
