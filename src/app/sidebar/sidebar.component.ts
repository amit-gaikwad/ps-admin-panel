import { Component, OnInit } from '@angular/core';
import { isLoweredSymbol } from '@angular/compiler';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    
  sId = "";

  constructor( public auth : AuthService) { }

  ngOnInit() {
    this.sId = localStorage.getItem("sId");
    }

}
