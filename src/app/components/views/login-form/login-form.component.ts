import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountServiceService } from 'src/app/common/services/account-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public textValue = '';
  public count: number = 0;

  @ViewChild('loginInput')
  loginInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  constructor(private accountService: AccountServiceService) {}

  public passwordVision: boolean = false;

  public firstClick: boolean = true;
  public secondClick: boolean = true;

  public OnInputClick(type: number) {
    let login = this.loginInput.nativeElement.value;
    let password = this.passwordInput.nativeElement.value;

    if (type === 0 && this.firstClick) {
      login = '';
      this.firstClick = false;
    } else if (type === 1 && this.secondClick) {
      password = '';
      this.secondClick = false;
    }
  }

  public auth() {
    let loginInput = this.loginInput.nativeElement.value;
    let passwordInput = this.passwordInput.nativeElement.value;

    let result =
      this.isValidPhone(loginInput) ||
      this.isValidEmail(loginInput) &&
      this.isValidPassword(passwordInput);

    if (result == false) {
      this.textValue = 'Вы ввели неверный логин или пароль';
    } else {
      this.textValue = 'Авторизация';
      this.accountService.auth(loginInput, passwordInput);
    }
    if (loginInput.length > 0 && passwordInput.length == 0) {
      this.textValue = 'Введите пароль';
    } else if (passwordInput.length > 0 && loginInput.length == 0) {
      this.textValue = 'Введите логин';
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
