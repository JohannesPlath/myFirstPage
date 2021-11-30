import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  colorCheck() {
    let securityLevelPassw = 1;


    passWordL = document.forms["LogIn4"]["passWordL"].value;
    var ConfpassWordS = document.forms["LogIn4"]["ConfpassWordL"].value;

    var mustHaveSpeciealSign = /[! @'$%^&*]/;
    var countOfSpecialSign = passWordL.search(mustHaveSpeciealSign);

    var mustHaveUpCase = /[A-Z]/;
    var mustHaveLowCase = /[a-z]/;
    var mustHaveNumber = /[0-1]/;

    var countOfUpperCase = passWordL.search(mustHaveUpCase);
    var countOfLowerCase = passWordL.search(mustHaveLowCase);
    var countOfNumber = passWordL.search(mustHaveNumber);

    setBackroundcolor(securityLevelPassw);

    if ((countOfSpecialSign > 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfSpecialSign <= 0)) {

    }
    if ((countOfLowerCase >= 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfUpperCase >= 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfNumber >= 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfLowerCase < 0)) {


    }
    if ((countOfUpperCase < 0)) {

    }
    if ((countOfNumber < 0)) {

    }
    if ((passWordL.length >= 8)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if (((passWordL.length < 8))) {
    }

    if (passWordL !== ConfpassWordS) {
      return false;
    }
    if (securityLevelPassw < 5) {
      setBackroundcolor(securityLevelPassw);
      return false;
    }

  }

  var
  passWordL = null;

  newAccount() {
    let securityLevelPassw = 0;

    var famNameL = document.forms["LogIn4"]["famNameL"].value;
    var surNameL = document.forms["LogIn4"]["surNameL"].value;
    passWordL = document.forms["LogIn4"]["passWordL"].value;
    var ConfpassWordS = document.forms["LogIn4"]["ConfpassWordL"].value;

    var mustHaveSpeciealSign = /[! @'$%^&*]/;
    var countOfSpecialSign = passWordL.search(mustHaveSpeciealSign);

    var mustHaveUpCase = /[A-Z]/;
    var mustHaveLowCase = /[a-z]/;
    var mustHaveNumber = /[0-1]/;

    var countOfUpperCase = passWordL.search(mustHaveUpCase);
    var countOfLowerCase = passWordL.search(mustHaveLowCase);
    var countOfNumber = passWordL.search(mustHaveNumber);

    setBackroundcolor(securityLevelPassw);

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
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfSpecialSign <= 0)) {
      alert(" minimum 1 of : ! @ ' $ % ^ & *")
    }
    if ((countOfLowerCase >= 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfUpperCase >= 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
    }
    if ((countOfNumber >= 0)) {
      securityLevelPassw++;
      setBackroundcolor(securityLevelPassw);
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
      setBackroundcolor(securityLevelPassw);
    }
    if (((passWordL.length < 8))) {
      alert(" minimum count of Character: 8 !");
    }

    if (passWordL !== ConfpassWordS) {
      alert("password not eqaul!");
      return false;
    }
    if (securityLevelPassw < 5) {
      setBackroundcolor(securityLevelPassw);
      return false;
    }


  }

  setBackroundcolor(level) {

    if (level === 1) {
      document.getElementById("passWordL").setAttribute('class', 'red')
    }
    if (level === 2) {
      document.getElementById("passWordL").setAttribute('class', 'lightred')
    }
    if (level === 3) {
      document.getElementById("passWordL").setAttribute('class', 'orange')
    }
    if (level === 4) {
      document.getElementById("passWordL").setAttribute('class', 'yellow')
    }
    if (level === 5) {
      document.getElementById("passWordL").setAttribute('class', 'green')
    }


  }

}
