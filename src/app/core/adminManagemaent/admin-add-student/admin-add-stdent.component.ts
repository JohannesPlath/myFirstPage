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
    DOB: [null, Validators.required],
    DOY: [null, Validators.required],
    Department: [null, Validators.required],
    Mail: [null, Validators.required],
    female: [null, Validators.required],
    male: [null, Validators.required],
    deverse: [null, Validators.required],
    unknown: [null, Validators.required],
    courseOptions: [null, Validators.required],

  });
  mngVis: any;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = {year: this.year - 100, month: this.month, day: this.day};
  maxDate = {year: this.year - 16, month: this.month + 1, day: this.day};

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  addStudent() {
    let student_Id = this.addStudentForm.controls["student_Id"].value;
    let First_Name = this.addStudentForm.controls["First_Name"].value;
    let Last_Name = this.addStudentForm.controls["Last_Name"].value;
    let temp_DOB = this.addStudentForm.controls["DOB"].value;
    let DOB = new Date(temp_DOB.slice(0, 4), temp_DOB.slice(5, 7) - 1, temp_DOB.slice(8, 10));
    let tempDOY = this.addStudentForm.controls["DOY"].value;
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
    if (this.addStudentForm.controls["female"] == null) {

    }
    // toDo generate new entry

    this.router.navigate(['/student-management']);
    return true;
  }


  checkAcualB_Date() {
    let actualDate = new Date()
    let yesterday = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDay() - 2);
    // @ts-ignore
    let elem = document.getElementById("DOB")
    console.log(elem)
    // @ts-ignore
    console.log(yesterday)
    // @ts-ignore
    elem.setAttribute("max", yesterday.toISOString().split('T')[0])

  }


  checkAcualYoin_Date() {
    let actualDate = new Date()
    let yesterday = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDay() - 1);
    yesterday.setDate(yesterday.getDate() - 1)
    // @ts-ignore
    let elem = document.getElementById("DOY")
    console.log(elem)
    // @ts-ignore
    console.log(yesterday)
    // @ts-ignore
    elem.setAttribute("max", yesterday.toISOString().split('T')[0])
  }
}
