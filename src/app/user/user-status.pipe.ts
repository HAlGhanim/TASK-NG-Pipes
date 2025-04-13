import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus',
  standalone: true,
})
export class UserStatusPipe implements PipeTransform {
  transform(status: string): string {
    return status === 'active'
      ? 'green'
      : status === 'inactive'
      ? 'yellow'
      : 'red';
  }
}
