import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  links:Array<any>=[
    { name :"Home", route :"/"},
    { name :"About", route :"/about"},
    { name :"Projects", route :"/projects"},
    { name :"Blog", route :"/blog"}
  ];


}
