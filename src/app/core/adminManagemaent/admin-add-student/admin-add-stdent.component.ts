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
    maxDateDOB: [null, Validators.required],
    minDateDOB: [null, Validators.required],
  });


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
    return true;
  }


  /*checkAcualDate() {
    console.log("  checkAcualDate() {\n")
    let actualDay = new Date()
    let yesterday = new Date(actualDay)
    yesterday.setDate(yesterday.getDate() - 1)
    this.min = yesterday
    /!* let elem = this.addStudentForm.controls["DOB"].value
     elem.setAttribute("max", yesterday.toISOString().split('T')[0])
   *!/
    this.min = yesterday
  }*/

  private actualDay = new Date();
  maxDateDOB = new Date(this.actualDay.getFullYear(), (this.actualDay.getMonth(), this.actualDay.getDay() - 3));
  minDateDOB = new Date(this.actualDay.getFullYear() - 1600, (this.actualDay.getMonth(), this.actualDay.getDay() - 3))

  validDate() {
    let maxDateDOB = this.addStudentForm.controls["maxDateDOB"].value;
    let minDateDOB = this.addStudentForm.controls["minDateDOB"].value;
    let actualDate = new Date()//.setHours(0,0,0,0)
    let maxDateDoB = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDay() - 3);
    let minDateDoB = new Date(actualDate.getFullYear() - 1060, actualDate.getMonth(), actualDate.getDay());
    /*
        let minDateDOB = {year: this.year - 1000, month: this.month, day: this.day};
        let maxDateDOB = {year: this.year, month: this.month + 1, day: this.day - 1};

    var today = new Date().toISOString().split('T')[0];
    this.min = new Date()*/
    this.addStudentForm.controls["maxDateDOB"].value.setAttribute('maxDateDOB', maxDateDoB);
    this.addStudentForm.controls["minDateDOB"].value.setAttribute('maxDateDOB', minDateDoB);
    console.log(maxDateDoB)
    console.log(minDateDoB)
  }
}
