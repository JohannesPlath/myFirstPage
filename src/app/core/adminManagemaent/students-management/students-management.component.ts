import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss']
})
export class StudentsManagementComponent implements OnInit {

  private students: any[] = [];
  private semester: string = '';
  private department: string = '';
  private table: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.requestJson();
    let actualList = this.filterList(this.students, '10', this.department);
    actualList = actualList.concat(this.filterList(this.students, '4', this.department));
    this.showFiltered(actualList);
  }

  directToAdminAddStudent() {
    this.router.navigate(['/adminAddStudent']);
  }

  directToAdminRemove() {
  }

  directToAdminUpdate() {
  }

  showSelectedSemester(event: Event) {
    this.semester = (<HTMLInputElement>event.target).value
    const actualList = this.filterList(this.students, this.semester, this.department);
    this.showFiltered(actualList);
    // this.addTableData(actualList);
  }

  showSelectedDepartment(event: Event) {
    this.department = (<HTMLInputElement>event.target).value
    const actualList = this.filterList(this.students, this.semester, this.department);
    this.showFiltered(actualList);
    //this.addTableData(actualList);
  }

  filterList(students: any[], semester: string, department: string) {
    if (semester === "Summer") {
      return students.filter(function (student) {
        const month = parseInt(student.JoiningYr.slice(5, 7));
        if (department != '') {
          return month === 4 && department == student.Department;
        }
        return month === 4;
      });
    } else if (semester === "Winter") {
      return students.filter(function (student) {
        const month = parseInt(student.JoiningYr.slice(5, 7));
        if (department != '') {
          return month === 10 && department == student.Department;
        }
        return month === 10;
      });
    }
    return [];
  }

  showFiltered(students: any[]) {
    console.log(students)
    var ul = document.getElementById("actualisedList");
    // @ts-ignore
    while (ul.firstChild) { // @ts-ignore
      ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < students.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(this.completetEntry(students[i])));
      // @ts-ignore
      ul.appendChild(li);
    }
  }

  /*
    addTableData(students: any[]) {
      var table = document.getElementById("table");
      for (let dataRow in students) {
        var row = this.table.insertRow(-1);

        // define cells in row
        var cellID = row.insertCell(0);
        var cellFName = row.insertCell(1);
        var cellLName = row.insertCell(2);
        var cellDob = row.insertCell(3);
        var cellGender = row.insertCell(4);
        var cellDepartment = row.insertCell(5);
        var cellEmail = row.insertCell(6);
        var cellJoin = row.insertCell(7);

        // set values of cells
        cellID.innerHTML = students[dataRow].ID;
        cellFName.innerHTML = students[dataRow].FirstName;
        cellLName.innerHTML = students[dataRow].LastName;
        cellDob.innerHTML = students[dataRow].DOB;
        cellGender.innerHTML = students[dataRow].Gender;
        cellDepartment.innerHTML = students[dataRow].Department;
        cellEmail.innerHTML = students[dataRow].Email;
        cellJoin.innerHTML = students[dataRow].JoiningDate;
      }
      table = row
    }*/

  completetEntry(student: any[]) {
    // @ts-ignore
    return student.LastName + ", " + student.FirstName + "," + student.DOB + "," + student.Department + "," + student.JoiningYr;
  }

  /* filterDepartment(students: any[], department: String) {
     return students.filter(function (student) {
       return student.department === department
     });
   }*/

  requestJson() {
    const xhttp = new XMLHttpRequest()
    var self = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        self.students = JSON.parse(xhttp.responseText);
      }
    };
    xhttp.open('GET', 'http://localhost:4200/assets/Students.json', true);
    xhttp.send();
  }
}
