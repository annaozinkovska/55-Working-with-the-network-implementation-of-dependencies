import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(public usersService: UsersService) {};
}