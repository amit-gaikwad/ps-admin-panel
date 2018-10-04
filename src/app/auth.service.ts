import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private myRoute: Router ) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    return (localStorage.getItem("isLoggedIn") === "true")
  }

  isAdminActive() {
    return (localStorage.getItem("isAdmin") === "true")
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["parentlogin"]);
  }
}
