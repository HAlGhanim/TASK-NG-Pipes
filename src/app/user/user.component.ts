import { UserStatusPipe } from './user-status.pipe';
import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import * as common from '@angular/common';
import { UserLoginPipe } from './user-login.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    common.TitleCasePipe,
    common.DatePipe,
    common.CurrencyPipe,
    UserStatusPipe,
    UserLoginPipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() data!: User;
}
