import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

user;
userId;

  constructor(private usersService:UsersService,private route:ActivatedRoute,private router:Router) {

      // Récupérer l'id dans  la route
      this.route.params.subscribe((params) => {
          this.userId=params['id'];
          console.log(params['id']);
      })

      // utiliser le service qui permet d'avoir un utilisateur en fonction de l'id
    this.usersService.getUser(this.userId).subscribe(user=>{

        this.user=user;
        console.log(this.user);

    });

  }

  ngOnInit() {
  }

  // fonction de suppression qui est utilisé au click (voir html)
  deleteUser(){
      this.usersService.delete(this.userId).subscribe(user=>{
          console.log(this.user);
          // on retourne sur la page users
           this.router.navigate['users'];
      });

  }

}
