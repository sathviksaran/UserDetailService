import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService){

  }

  user: { name: string; job: string; gender: string; country: string; age: number; avatar: string; } | undefined;

  ngOnInit(): void{
    this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) =>{
      this.user = data;
    })
  }
}
