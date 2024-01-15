import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Config } from './types/common';

@Pipe({
  name: 'config',
  standalone: true
})
export class ConfigPipe implements PipeTransform {

  transform(value: Config | undefined, ...args: unknown[]): string {
    const exludeCost = args.includes('excludeCost');
    if (!value) {
      return '';
    }

    const summary = `Range: ${value.range} miles - Max speed: ${value.speed}`;

    if (exludeCost) {
      return summary;
    }

    const currencyPipe = new CurrencyPipe('en-US');
    return `${summary} - Cost: ${currencyPipe.transform(value.price)}`;
  }

}
