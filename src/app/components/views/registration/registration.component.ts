import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountServiceService } from '../../../common/services/account-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public userName: string = '';
  public email: string = '';
  public phone: string = '';
  public date: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public agreement: boolean = false;

  @ViewChild('nameInput')
  nameInput!: ElementRef;

  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('phoneInput')
  phoneInput!: ElementRef;

  @ViewChild('dateInput')
  dateInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  @ViewChild('agreementIsChecked')
  agreementIsChecked!: ElementRef;

  constructor(private accountService: AccountServiceService) {}

  public createAccaunt() {
    console.log(this.userName);

    let phoneResult = this.isValidPhone(this.phone);
    let emailResult = this.isValidEmail(this.email);
    let passwordResult = this.isValidPassword(this.password);

    if (phoneResult == false) {
      console.log('Вы ввели недопустимый формат телефона.');
    } else if (emailResult == false) {
      console.log('Вы ввели недопустимый формат E-mail.');
    } else if (passwordResult == false) {
      console.log('Вы ввели недопустимый формат пароля.');
    }

    if (
      this.email.length < 0 ||
      this.password.length < 0 ||
      this.phone.length < 0 ||
      this.userName.length < 0 ||
      this.date.length < 0 ||
      !this.agreement
    ) {
      console.log('Заполните все поля.');
    } else {
      this.accountService.createAccount(
        this.password,
        this.email,
        this.date,
        this.userName,
        this.phone,
        this.agreement
      );
    }
  }

  public isValidPhone(checkStr: string): boolean {
    let phoneRegex: any = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return phoneRegex.test(checkStr);
  }

  public isValidEmail(checkStr: string): boolean {
    let emailRegex: any =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(checkStr);
  }

  public isValidPassword(checkStr: string): boolean {
    let passwordRegex: any =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordRegex.test(checkStr);
  }

  ngOnInit(): void {}
}
