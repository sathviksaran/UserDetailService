import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user.service';
import { AllUsersComponent } from "./all-users/all-users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [UserService],
    imports: [RouterOutlet, AllUsersComponent, UserDetailComponent]
})
export class AppComponent {
  title = 'UserDetailService';

  constructor(private userService: UserService){

  }
}
