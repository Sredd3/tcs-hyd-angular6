import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _users:User[];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.fetchAllUsers().subscribe((response)=>{
      this._users = response.body;
    })
  }


  get users(){
    return this._users;
  }

}
