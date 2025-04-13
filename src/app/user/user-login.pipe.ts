import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userLogin',
  standalone: true,
})
export class UserLoginPipe implements PipeTransform {
  transform(lastLogin: Date): unknown {
    const daysAgo =
      (Date.now() - new Date(lastLogin).getTime()) / (1000 * 60 * 60 * 24);
    return daysAgo <= 7
      ? '🔥'
      : daysAgo <= 30
      ? '💤'
      : daysAgo <= 90
      ? '🦥'
      : '👻 ';
  }
}
