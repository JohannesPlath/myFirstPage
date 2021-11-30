import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stuff-management',
  templateUrl: './stuff-management.component.html',
  styleUrls: ['./stuff-management.component.scss']
})
export class StuffManagementComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  requestJson() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(xhttp.responseText)
      }
    };
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhttp.send();
  }

  showSelectedList() {
    let department = document.getElementById("Department")
    var stuffList = this.requestJson();
    console.log(stuffList)
    //var actualList = filterListe(sStuffList,  department.value)
    // @ts-ignore
    this.showFiltered(stuffList);
  }

  showFiltered(stuffList: any[]) {
    var ul = document.getElementById("actualStuffList");
    // @ts-ignore
    while (ul.firstChild) { // @ts-ignore
      ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < stuffList.length; i++) {  // toDo .length knallt ... Uncaught TypeError: Cannot read properties of undendefined (reading 'length')
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(this.completetEntry(stuffList[i])));
      // @ts-ignore
      ul.appendChild(li);
    }
  }

  completetEntry(stuff: any[]) {
    // @ts-ignore
    return stuff.name + ", " + stuff.username + "," + stuff.phone + "," + stuff.id + "," + stuff.email;
  }
}
