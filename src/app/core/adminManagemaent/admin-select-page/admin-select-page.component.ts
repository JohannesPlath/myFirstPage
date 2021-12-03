import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-select-page',
  templateUrl: './admin-select-page.component.html',
  styleUrls: ['./admin-select-page.component.scss']
})
export class AdminSelectPageComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  directToSutdent_management() {
    this.router.navigate(['/student-management']);
  }

  directToStuff_management() {
    this.router.navigate(['/stuff-management']);
  }
}
