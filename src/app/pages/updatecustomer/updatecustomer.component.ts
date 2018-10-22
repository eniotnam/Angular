import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from "@angular/router";

@Component({
selector: 'app-updatecustomer',
templateUrl: './updatecustomer.component.html',
styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

customer;
customerId;
formUpdate={
"businessname":"",
"Address":{
"street":"",
"city":"",
"postalcode":"",
},
"Contact":{
"lastname":"",
"name":"",
"phone":"",
"mail":"",
},
"activity":""
}

constructor(private customersService:CustomersService,private route:ActivatedRoute) {
this.route.params.subscribe((params) => {
this.customerId=params['id'];
})

this.customersService.getCustomer(this.customerId).subscribe(customer=>{

this.customer=customer;
console.log(this.customer);

});
}

ngOnInit() {
}
updateCustomer(id){
this.customersService
.updatedCustomer(this.customerId,this.formUpdate.businessname,this.formUpdate.Address.street,this.formUpdate.Address.city,this.formUpdate.Address.postalcode,this.formUpdate.Contact.lastname,this.formUpdate.Contact.name,this.formUpdate.Contact.phone,this.formUpdate.Contact.mail,this.formUpdate.activity)      
}
}
