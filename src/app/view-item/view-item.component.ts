import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
id:any;
items:any;
message:any;
  constructor(private service:ItemService) { }

public delete(id:number){
  let resp=this.service.delete(id);
resp.subscribe((data=>this.items=data));
}

public findid(){
  let resp=this.service.findbyid(this.id);
  resp.subscribe((data=>this.items=data));
}
update(){
  window.location.href="http://localhost:4200/item-dashboard"
}
  ngOnInit(): void {
    let resp=this.service.getallItems();
    resp.subscribe((data=>this.items=data));
  }

}
