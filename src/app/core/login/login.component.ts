import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
    passWordA: [null, Validators.required],

  });
  studentForm = this.fb.group({
    surNameS: [null, Validators.required],
    famNameS: [null, Validators.required],
    passWordS: [null, Validators.required]
  });

  newAccount: any;

  constructor(private fb: FormBuilder,
              private router: Router) {
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
    this.router.navigate(['/admin-select']);
    return true;
  }

  logInCheckStudent(): boolean {
    var famNameS = this.studentForm.controls["famNameS"].value;
    var surNameS = this.studentForm.controls["surNameS"].value;
    var passWordS = this.studentForm.controls["passWordS"].value;

    this.counter2--;
    if (this.counter2 <= 0) {
      // @ts-ignore
      document.getElementById("btnSubmitStuff").disabled = true;
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
    this.router.navigate(['/student-work']);
    return true;
  }

  directToNewAccount() {
    this.router.navigate(['/new-account']);
  }
}
