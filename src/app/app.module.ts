import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { TagsComponent } from './tags/tags.component';
import { LoginComponent } from './login/login.component';
import { ItemDashboardComponent } from './item-dashboard/item-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    TagsComponent,
    LoginComponent,
    ItemDashboardComponent,
    AddItemComponent,
    ViewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
