import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';

import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { UpdateprojectComponent } from './pages/updateproject/updateproject.component';
import { CreateprojectComponent } from './pages/createproject/createproject.component';

import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { UpdatecustomerComponent } from './pages/updatecustomer/updatecustomer.component';
import { CreatecustomerComponent } from './pages/createcustomer/createcustomer.component';

// services
import {UsersService} from './services/users.service';
import { CustomersService } from './services/customers.service';

@NgModule({
  declarations: [
  // GENERAL COMPONENT
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
     AboutComponent,
   
// USERS   
    UsersComponent,
    UserComponent,
    CreateComponent,
    UpdateComponent,
    
//PROJECTS    
     ProjectsComponent,
    ProjectComponent,
    UpdateprojectComponent,
    CreateprojectComponent,
    
//CUSTOMERS
   CustomersComponent,
    CustomerComponent,
    UpdatecustomerComponent,
    CreatecustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      UsersService,
      CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    // baseUrl = environment.apiUrl;
    // animal: string = environment.APIEndpoint;
}
