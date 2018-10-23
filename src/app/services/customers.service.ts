import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class CustomersService {


// ApiUrl="http://localhost:4200/assets/data/data.json";
apiUrl="http://localhost:3000/customers/";

datatopost;

httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})};

constructor(private http:HttpClient,private router:Router) {

}

// get all customers
getCustomers(){
return this.http.get(this.apiUrl);
}

// get one customer by Id
getCustomer(id){
return this.http.get(this.apiUrl+id);
}

// create a customer
createCustomer(businessname,street,city,postalcode,lastname,name,phone,mail,activity){
// body envoyé dans la requête, appelé payload
const payload =
{ 
"businessname":businessname,
"Address":{
        "street":street,
        "city":city,
        "postalcode":postalcode,
        },
"Contact":{
        "lastname":lastname,
        "name":name,
        "phone":phone,
        "mail":mail,
        },
"activity":activity
}   

// conversion en jSON
this.datatopost=JSON.stringify(payload);

// requête http en post qui renvoie resp ou err
return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
res =>{
console.log(res);
},
err => {
console.log(err.message);
}
);
}

// mise à jour customer
updatedCustomer(id,businessname,street,city,postalcode,lastname,name,phone,mail,activity){

// body envoyé dans la requête, appelé payload
const payload =
{
"businessname":businessname,
"Address":{
        "street":street,
        "city":city,
        "postalcode":postalcode,
        },
"Contact":{
        "lastname":lastname,
        "name":name,
        "phone":phone,
        "mail":mail,
        },
"activity":activity
}

// conversion en JSON
this.datatopost=JSON.stringify(payload);

// requête http en post qui renvoie resp ou err
return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
res =>{
console.log(res);
},
err => {
console.log(err.message);
}
);

}

// suppression d'un customer
delete(id){
return this.http.delete(this.apiUrl+id);
}
}
