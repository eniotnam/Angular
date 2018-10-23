import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users;

  constructor(private usersService:UsersService) {

    this.usersService.getUsers().subscribe(users=>{
        this.users=users;
        console.log(users);
    })

  }

  ngOnInit() {

  }

  deleteUser(id){
      this.usersService
      .delete(id).subscribe(resp=>{
          console.log(resp);
      });
      // on recharge la page
      location.reload();
  }

}
