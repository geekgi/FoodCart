import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../services/item.service';
import {FormControl,FormGroup} from '@angular/forms'; 
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item=new Item();
  message:any;

  constructor(private itemservice:ItemService) { }
  
    

  ngOnInit(): void {
  }

  public registerNow(){
    let resp=this.itemservice.addItem(this.item);
    resp.subscribe((data)=>this.message="successfully added new item");
     }


  
  
  
}
