import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stuff-management',
  templateUrl: './stuff-management.component.html',
  styleUrls: ['./stuff-management.component.scss']
})
export class StuffManagementComponent implements OnInit {

  private stuff: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  requestJson() {
    const self = this;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        self.stuff = JSON.parse(xhr.responseText);
      }
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
  }

  showSelectedList(): void {
    let department = document.getElementById("Department");
    //var actualList = filterListe(sStuffList,  department.value)
    this.showFiltered(this.stuff);
  }

  showFiltered(stuffList: any[]): void {
    const ul = document.getElementById("actualStuffList");
    if (!ul) {
      return;
    }
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < stuffList.length; i++) {  // toDo .length knallt ... Uncaught TypeError: Cannot read properties of undendefined (reading 'length')
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(this.completetEntry(stuffList[i])));
      ul.appendChild(li);
    }
  }

  completetEntry(stuff: any[]): string {
    // @ts-ignore
    return stuff.name + ", " + stuff.username + "," + stuff.phone + "," + stuff.id + "," + stuff.email;
  }
}
