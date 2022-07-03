import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: User[], sortDirection: string): any {
    let multiplier = 1;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    value.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1 * multiplier;
      } else if (a.name > b.name) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });

    return value;
  }
}
