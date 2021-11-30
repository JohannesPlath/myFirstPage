import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-add-stdent',
  templateUrl: './admin-add-stdent.component.html',
  styleUrls: ['./admin-add-stdent.component.scss']
})
export class AdminAddStdentComponent implements OnInit {


  addStudentForm = this.fb.group({
    student_Id: [null, Validators.required],
    First_Name: [null, Validators.required],
    Last_Name: [null, Validators.required],
    temp_DOB: [null, Validators.required],
    tempDOY: [null, Validators.required],
    Department: [null, Validators.required],
    Mail: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  addStudent() {
    let student_Id = this.addStudentForm.controls["Sudent_Id"].value;
    let First_Name = this.addStudentForm.controls["First_Name"].value;
    let Last_Name = this.addStudentForm.controls["Last_Name"].value;
    let temp_DOB = this.addStudentForm.controls["DOB"].value;
    let DOB = new Date(temp_DOB.slice(0, 4), temp_DOB.slice(5, 7) - 1, temp_DOB.slice(8, 10));
    let tempDOY = this.addStudentForm.controls["DoY"].value;
    let DOY = new Date(tempDOY.slice(0, 4), tempDOY.slice(5, 7) - 1, tempDOY.slice(8, 10));
    let Department = this.addStudentForm.controls["Department"].value;
    let Mail = this.addStudentForm.controls["Mail"].value;
    let actualDate = new Date()//.setHours(0,0,0,0)
    let maxDate = new Date(actualDate.getFullYear() - 16, actualDate.getMonth(), actualDate.getDay());
    let minDate = new Date(actualDate.getFullYear() - 60, actualDate.getMonth(), actualDate.getDay());
    let minJoiningDate = new Date(2015, 1)

    if (DOB < minDate) {
      alert("to old to study")
      return false;
    }
    if (DOB >= maxDate) {
      alert("to young to study")
      return false;
    }
    if (DOY < minJoiningDate) {
      alert("joining year is min 2015")
      return false;
    }
    // toDo generate new entry
    return true;
  }
}
