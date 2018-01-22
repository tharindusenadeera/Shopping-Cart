import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import {routing} from './app.routes';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ItemComponent } from './home/item/item.component';
import {ItemService} from './home/item.service';
import { ItemdetailComponent } from './home/itemdetail/itemdetail.component';
import { ItemcartComponent } from './home/itemcart/itemcart.component';
import { ItemaddcartComponent } from './home/item/itemaddcart/itemaddcart.component';
import { RegisterService } from './register/register.service';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    ItemComponent,
    ItemdetailComponent,
    ItemcartComponent,
    ItemaddcartComponent,
    
  ],
  imports: [
    BrowserModule,routing,RouterModule,FormsModule,ReactiveFormsModule,HttpModule,JsonpModule
  ],
  providers: [ItemService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
