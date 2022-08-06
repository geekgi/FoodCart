import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string;
  password!: String;

  constructor() { }

  ngOnInit(): void {
  }
Login(){  
  if(this.email=="admin@gmail.com" && this.password=="admin"){
alert("admin Login success")
window.location.href="http://localhost:4200/Item-list"
  }

else {
alert("user login success")
window.location.href="http://localhost:4200/";

}
}
}
