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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.requestJson();
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
  }

  showSelectedDepartment(event: Event) {
    this.department = (<HTMLInputElement>event.target).value
    const actualList = this.filterList(this.students, this.semester, this.department);
    this.showFiltered(actualList);
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

  completetEntry(student: any[]) {
    // @ts-ignore
    return student.LastName + ", " + student.FirstName + "," + student.DOB + "," + student.Department + "," + student.JoiningYr;
  }

  filterDepartment(students: any[], department: String) {
    return students.filter(function (student) {
      return student.department === department
    });
  }

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
