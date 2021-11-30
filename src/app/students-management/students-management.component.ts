import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss']
})
export class StudentsManagementComponent implements OnInit {

  private students: any[] | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  directToAdminAddStudent() {
    this.router.navigate(['/adminAddStudent']);
  }

  directToAdminRemove() {

  }

  directToAdminUpdate() {

  }


  showSelectedList() {
    let Semester = document.getElementById("SS/WS")
    let department = document.getElementById("Department")
    // @ts-ignore
    var actualList = filterListe(students, Semester.value, department.value)
    this.showFiltered(actualList);
  }


  filterListe(students: any[], Semester: string, department: any) {
    if (Semester === "Summer") {
      return students.filter(function (student) {
        var month = parseInt(student.JoiningYr.slice(5, 7))
        return month === 4 && department == student.Department
      });
    } else if (Semester === "Winter") {
      return students.filter(function (student) {
        var month = parseInt(student.JoiningYr.slice(5, 7))
        return month === 10 && department == student.Department
      });
    }
    return [];
  }


  showFiltered(students: any[]) {
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


  /*
  function loadJSON(" ./students.json", function(text){
      var data = JSON.parse(text);
      console.log(data);
  });*/

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
        console.log(xhttp.responseText)
        self.students = JSON.parse(xhttp.responseText);
      }
    };
    xhttp.open('GET', 'https://localhost:4200/assets/student.json', true);
    xhttp.send();
  }


}
