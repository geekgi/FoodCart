import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  
  public addItem(data: any){
    return this.http.post("http://localhost:8081/additem",data);
  }
  public getallItems(){
    return this.http.get("http://localhost:8081/getallitems");
  }
  public findbyid(id:number){
   return this.http.get("http://localhost:8081/finditem/"+id);
  }
  public delete(id:number){
    return this.http.delete("http://localhost:8081/deleteitem/"+id);
  }
  public update(data:any){
    return this.http.put("http://localhost:8081/updateitem",data);
  }
}
