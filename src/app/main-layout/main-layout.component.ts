import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  private toggle: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchColor() {
    if (this.toggle) {
      document.documentElement.style.setProperty('--primary-color', '#0804ee');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#00FF00');
    }
    this.toggle = !this.toggle;
  }
}
