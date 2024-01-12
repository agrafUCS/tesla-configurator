import { Pipe, PipeTransform } from '@angular/core';
import { Config } from './option.service';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'config',
  standalone: true
})
export class ConfigPipe implements PipeTransform {

  transform(value: Config | undefined, ...args: unknown[]): string {
    if (!value) {
      return '';
    }
    const currencyPipe = new CurrencyPipe('en-US');
    return `Range: ${value.range} miles - Max speed: ${value.speed} - Cost: ${currencyPipe.transform(value.price)}`;
  }

}
