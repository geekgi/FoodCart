import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-item-dashboard',
  templateUrl: './item-dashboard.component.html',
  styleUrls: ['./item-dashboard.component.css']
})
export class ItemDashboardComponent implements OnInit {
  item: Item=new Item();
  message:any;
  constructor(private service:ItemService) { }

  ngOnInit(): void {
  }

  public update(){
    let resp=this.service.update(this.item);
  resp.subscribe((data=>this.message="successfully updated"))
  }
}
