import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = "";

  constructor(private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  }

  logout(){
    if(localStorage.getItem("isAdmin") == "true"){
         localStorage.clear();
         this.router.navigate(['/adminlogin']);
         window.location.reload();

    }else{
      localStorage.clear();
      this.router.navigate(['/parentlogin']);
      window.location.reload();

    }
  }

}
