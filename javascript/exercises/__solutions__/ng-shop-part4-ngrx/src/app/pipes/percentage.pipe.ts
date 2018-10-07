import { Pipe, PipeTransform } from '@angular/core';

function isNumeric(num: any) {
  return !isNaN(num);
}

const formatter = new Intl.NumberFormat('nl-BE', {
  style: 'percent',
});

@Pipe({
  name: 'percentage',
})
export class PercentagePipe implements PipeTransform {
  transform(value: any): any {
    // lets support string also
    const rawValue = parseFloat(value);

    // but it need to be a number
    if (!isNumeric(rawValue)) {
      return value;
    }

    return formatter.format(rawValue / 100);
  }
}
