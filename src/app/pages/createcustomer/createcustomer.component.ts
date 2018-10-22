import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import {Router} from '@angular/router';

@Component({
selector: 'app-createcustomer',
templateUrl: './createcustomer.component.html',
styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

// création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
formCreate=
{
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

constructor(private customersService:CustomersService,private route:Router) {

}

ngOnInit() {
}

// fonction appelée au clique du bouton ajouter - voir html fonction (click)
createCustomer(){
// on consomme notre service qui a comme arguments les valuers du formulaire
this.customersService.createCustomer(this.formCreate.businessname,this.formCreate.Address.street,this.formCreate.Address.city,this.formCreate.Address.postalcode,this.formCreate.Contact.lastname,this.formCreate.Contact.name,this.formCreate.Contact.phone,this.formCreate.Contact.mail,this.formCreate.activity);
}

}
