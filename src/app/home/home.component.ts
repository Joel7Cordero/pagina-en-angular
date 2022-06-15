import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  email!: string;
  password!: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
 


