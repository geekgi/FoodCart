import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { ItemDashboardComponent } from './item-dashboard/item-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login',component:LoginComponent},
  {path:'item-dashboard',component:ItemDashboardComponent},
  {path:'add-Item',component:AddItemComponent},
  {path:'Item-list',component:ViewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
