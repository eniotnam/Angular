import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {HomeComponent} from './pages/home/home.component';
import {UserComponent} from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';

import { CustomersComponent } from "./pages/customers/customers.component";
import { CustomerComponent } from "./pages/customer/customer.component";
import { CreatecustomerComponent } from "./pages/createcustomer/createcustomer.component";
import { UpdatecustomerComponent } from "./pages/updatecustomer/updatecustomer.component";



import { ProjectsComponent } from "./pages/projects/projects.component";
import { ProjectComponent } from "./pages/project/project.component";
import { CreateprojectComponent } from "./pages/createproject/createproject.component";
import { UpdateprojectComponent } from "./pages/updateproject/updateproject.component";

const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'users',
        component:UsersComponent,
    },
    {
        path:'user/:id',
        component:UserComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    },
    {
        path:'create',
        component:CreateComponent,
    },
    {
        path:'update/:id',
        component:UpdateComponent,
    },
       {
        path:'projects',
        component:ProjectsComponent,
    },
    {
        path:'project/:id',
        component:ProjectComponent,
    },
    {
        path:'createproject',
        component:CreateprojectComponent,
    },
    {
        path:'updateproject/:id',
        component:UpdateprojectComponent,
    },
    {
        path:'customers',
        component:CustomersComponent,
    },
    {
        path:'customer/:id',
        component:CustomerComponent,
    },
    {
        path:'createcustomer',
        component:CreatecustomerComponent,
    },
    {
        path:'updatecustomer/:id',
        component:UpdatecustomerComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
