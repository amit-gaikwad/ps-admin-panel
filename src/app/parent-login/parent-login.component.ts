import { Component } from '@angular/core';
import { ParentService } from '../Services/parent.service';
import { Router } from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
    selector:"app-login-component",
    templateUrl:"./parent-login.component.html",
    styleUrls:["./parent-login.component.css"]
})
export class ParentLoginComponent{
    email = "";
    password = "";

    isError = false;

    parent = {};
    student_ids = [];

    constructor(private parentService : ParentService, private router : Router){

    }

    authenticate(){
        const user = {
                "email" : this.email,
                "password" : this.password
        }
        this.parentService.authenticate(user).subscribe(
            userObj =>{
                if(userObj.isLoggedIn == "true"){
                    localStorage.setItem("isAdmin", userObj.isAdmin);
                    localStorage.setItem("isLoggedIn", userObj.isLoggedIn);
                    this.parent = userObj.parentDetails;
                    this.student_ids = userObj.parentDetails.student_ids;
                    localStorage.setItem("sId",this.student_ids[0]);
                    console.log(userObj);
                    this.router.navigate(["/parentdashboard",{sId:this.student_ids[0]}]);
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