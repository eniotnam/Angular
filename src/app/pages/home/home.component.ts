import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../../services/customers.service";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 customers;
 users;

  constructor(private customersService:CustomersService,private usersService:UsersService) {

    this.customersService.getCustomers().subscribe(customers=>{
        this.customers=customers;
        console.log(customers);
    })
    
    this.usersService.getUsers().subscribe(users=>{
        this.users=users;
        console.log(users);
    })

  }

  ngOnInit() {
  }

}
