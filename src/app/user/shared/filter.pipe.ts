import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: any): any {
    if (searchTerm === undefined) return users;
    return users.filter((user) => {
      return user.lastname.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
