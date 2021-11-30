import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private counter2 = 4;
  private counter = 4;

  adminForm = this.fb.group({
    surNameA: [null, Validators.required],
    famNameA: [null, Validators.required],
    passWordA: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  logInCheckAdmin(): boolean {
    this.counter--;
    var famNameA = this.adminForm.controls['famNameA'].value;
    var surNameA = this.adminForm.controls['surNameA'].value;
    var passWordA = this.adminForm.controls['passWordA'].value;

    if (this.counter <= 0) {
      // @ts-ignore
      document.getElementById("btnSubmit").disabled = true;
      // @ts-ignore
      document.getElementById("famNameA").disable = true;
      alert("zu oft falsch")
      return false;
    } else if (famNameA == null || famNameA === "") {
      alert("Irgendwas muss da schon rein...!\n noch: " + this.counter + " Versuche");
      return false;
    } else if (famNameA !== "admin") {
      alert("‘Login Credentials Incorrect\n noch: " + this.counter + " Versuche");
      return false;
    } else if (surNameA == null || "") {
      alert("Irgendwas muss da schon rein...\n noch: " + this.counter + " Versuche");
      return false;
    } else if (surNameA !== "admin") {
      alert("‘Login Credentials Incorrect\n noch: " + this.counter + " Versuche");
      return false;
    } else if (passWordA == null || "") {
      alert("Irgendwas muss da schon rein...\n noch: " + this.counter + " Versuche");
      return false;
    } else if (passWordA !== "admin") {
      alert("‘Login Credentials Incorrect\n noch: " + this.counter + " Versuche");
      return false;
    }
    return true;
  }

  logInCheckStudent(): boolean {
    // @ts-ignore
    var famNameS = document.forms["LogIn3"]["famNameS"].value;
    // @ts-ignore
    var surNameS = document.forms["LogIn3"]["surNameS"].value;
    // @ts-ignore
    var passWordS = document.forms["LogIn3"]["passWordS"].value;

    this.counter2--;
    if (this.counter2 <= 0) {
      // @ts-ignore
      document.getElementById("btnSubmit").disabled = true;
      alert("zu oft falsch")
      return false;
    } else if (famNameS == null || famNameS === "") {
      alert("Irgendwas muss da schon rein...\n noch: " + this.counter2 + " Versuche");
      return false;
    } else if (famNameS !== "pl") {
      alert("‘Login Credentials Incorrect\n noch: " + this.counter2 + " Versuche");
      return false;
    } else if (surNameS == null || "") {
      alert("Irgendwas muss da schon rein...\n noch: " + this.counter2 + " Versuche");
      return false;
    } else if (surNameS !== "jo") {
      alert("‘Login Credentials Incorrect\n noch: " + this.counter2 + " Versuche");
      return false;
    } else if (passWordS == null || "") {
      alert("Irgendwas muss da schon rein...\n noch: " + this.counter2 + " Versuche");
      return false;
    } else if (passWordS !== "123") {
      alert("‘Login Credentials Incorrect\n noch: " + this.counter2 + " Versuche");
      return false;
    }
    window.location.href = "studentsWorkPage.html"
    return true;
  }
}