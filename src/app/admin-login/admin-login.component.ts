import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  {

    email = "";
    password = "";

    isError = false;

  constructor(private adminService : AdminService, private router : Router) { }

  authenticate(){
    const user = {
            "email" : this.email,
            "password" : this.password
    }
    this.adminService.authenticate(user).subscribe(
        userObj =>{
            if(userObj.isLoggedIn == "true"){
                localStorage.setItem("isAdmin", userObj.isAdmin);
                localStorage.setItem("isLoggedIn", userObj.isLoggedIn);
                
                console.log(userObj);
                this.router.navigate(["/studentlist"]);
                window.location.reload();
            }else{
                this.isError = true;
            }
            

        },
        error => {
            this.isError = true;
        }

    );
}

}
