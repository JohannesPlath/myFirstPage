import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  private passWordL = null;

  newAccountForm = this.fb.group({
    surNameL: [null, Validators.required],
    famNameL: [null, Validators.required],
    passWordL: [null, Validators.required],
    confpassWordL: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  colorCheck() {
    let securityLevelPassw = 1;

    let passWordL = this.newAccountForm.controls["passWordL"].value;
    let ConfpassWordS = this.newAccountForm.controls["confpassWordL"].value;

    let mustHaveSpeciealSign = /[! @'$%^&*]/;
    let countOfSpecialSign = passWordL.search(mustHaveSpeciealSign);

    let mustHaveUpCase = /[A-Z]/;
    let mustHaveLowCase = /[a-z]/;
    let mustHaveNumber = /[0-1]/;

    let countOfUpperCase = passWordL.search(mustHaveUpCase);
    let countOfLowerCase = passWordL.search(mustHaveLowCase);
    let countOfNumber = passWordL.search(mustHaveNumber);

    this.setBackgroundColor(securityLevelPassw);

    if ((countOfSpecialSign > 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfSpecialSign <= 0)) {

    }
    if ((countOfLowerCase >= 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfUpperCase >= 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfNumber >= 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfLowerCase < 0)) {


    }
    if ((countOfUpperCase < 0)) {

    }
    if ((countOfNumber < 0)) {

    }
    if ((passWordL.length >= 8)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if (((passWordL.length < 8))) {
    }

    if (passWordL !== ConfpassWordS) {
      return false;
    }
    if (securityLevelPassw < 5) {
      this.setBackgroundColor(securityLevelPassw);
      return false;
    }
    return true
  }

  newAccount(): boolean {
    let securityLevelPassw = 0;
    let famNameL = this.newAccountForm.controls["famNameL"].value;
    let surNameL = this.newAccountForm.controls["surNameL"].value;
    let passWordL = this.newAccountForm.controls["passWordL"].value;
    let confpassWordS = this.newAccountForm.controls["confpassWordL"].value;

    let mustHaveSpeciealSign = /[! @'$%^&*]/;
    let countOfSpecialSign = passWordL.search(mustHaveSpeciealSign);

    let mustHaveUpCase = /[A-Z]/;
    let mustHaveLowCase = /[a-z]/;
    let mustHaveNumber = /[0-1]/;

    let countOfUpperCase = passWordL.search(mustHaveUpCase);
    let countOfLowerCase = passWordL.search(mustHaveLowCase);
    let countOfNumber = passWordL.search(mustHaveNumber);

    this.setBackgroundColor(securityLevelPassw);

    if (famNameL == null || famNameL === "") {
      alert("Irgendwas muss da schon rein...!\n noch: ");
      return false;
    }
    if (surNameL == null || surNameL === "") {
      alert("Irgendwas muss da schon rein...!\n noch: ");
      return false;
    }
    if ((countOfSpecialSign > 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfSpecialSign <= 0)) {
      alert(" minimum 1 of : ! @ ' $ % ^ & *")
    }
    if ((countOfLowerCase >= 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfUpperCase >= 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfNumber >= 0)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if ((countOfLowerCase < 0)) {
      alert(" minimum a lowercase letter");

    }
    if ((countOfUpperCase < 0)) {
      alert(" minimum an uppercase letter ");

    }
    if ((countOfNumber < 0)) {
      alert(" minimum a number ");

    }
    if ((passWordL.length >= 8)) {
      securityLevelPassw++;
      this.setBackgroundColor(securityLevelPassw);
    }
    if (((passWordL.length < 8))) {
      alert(" minimum count of Character: 8 !");
    }

    if (passWordL !== confpassWordS) {
      alert("password not eqaul!");
      return false;
    }
    if (securityLevelPassw < 5) {
      this.setBackgroundColor(securityLevelPassw);
      return false;
    }
    this.router.navigate(['/student-work']);
    return true;
  }

  setBackgroundColor(level: Number) {
    let element = document.getElementById("passWordL");
    if (level === 1) {
      // @ts-ignore
      element.setAttribute('class', 'red')
    }
    if (level === 2) {
      // @ts-ignore
      element.setAttribute('class', 'lightred')
    }
    if (level === 3) {
      // @ts-ignore
      element.setAttribute('class', 'orange')
    }
    if (level === 4) {
      // @ts-ignore
      element.setAttribute('class', 'yellow')
    }
    if (level === 5) {
      // @ts-ignore
      element.setAttribute('class', 'green')
    }
  }

}
