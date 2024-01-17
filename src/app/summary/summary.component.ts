import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ConfigPipe } from '@resolvers/config.pipe';
import { PriceService } from '@services/price.service';
import { AppState, Summary } from '@app-types/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NgIf, ConfigPipe, CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  summary?: Summary;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.summary = this.route.snapshot.data['summary'];
  }

}
