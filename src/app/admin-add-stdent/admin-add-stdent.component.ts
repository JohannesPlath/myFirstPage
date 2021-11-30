import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-add-stdent',
  templateUrl: './admin-add-stdent.component.html',
  styleUrls: ['./admin-add-stdent.component.scss']
})
export class AdminAddStdentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  addStudent() {
    let student_Id = document.forms["addStuff"]["Sudent_Id"].value;
    let First_Name = document.forms["addStuff"]["First_Name"].value;
    let Last_Name = document.forms["addStuff"]["Last_Name"].value;
    let temp_DOB = document.forms["addStuff"]["DOB"].value;
    let DOB = new Date(temp_DOB.slice(0, 4), temp_DOB.slice(5, 7) - 1, temp_DOB.slice(8, 10));
    let tempDOY = document.forms["addStuff"]["DoY"].value;
    let DOY = new Date(tempDOY.slice(0, 4), tempDOY.slice(5, 7) - 1, tempDOY.slice(8, 10));
    let Department = document.forms["addStuff"]["Department"].value;
    let Mail = document.forms["addStuff"]["Mail"].value;
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

  }
}
