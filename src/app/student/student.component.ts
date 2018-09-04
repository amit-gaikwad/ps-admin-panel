import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sName = "";
  sRollNo = "";
  sAge = "";
  gender = "male";

  constructor( ) { }
  
  ngOnInit() {}

  onlyDecimalNumberKey(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

onStudentFormSubmit(val : any)
{ 
  console.log(val);
}

}
