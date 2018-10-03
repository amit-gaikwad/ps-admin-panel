import { Component, OnInit } from '@angular/core';
import { isLoweredSymbol } from '@angular/compiler';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sId = "";
  isAdmin = "";
  isLoggedIn = "";
  constructor() { }
  
  
  ngOnInit() {
    this.sId = localStorage.getItem("sId");
    this.isAdmin = localStorage.getItem("isAdmin");
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  }

}
