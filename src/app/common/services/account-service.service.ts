import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService extends BaseHttpService {
  constructor(http: Http) {
    super(http);
  }

  public auth(login: string, password: string) {
    let authDto = {
      Login: login,
      Password: password,
    };

    let authUrl = 'https://localhost:5001/api/Account/auth';

    this.post(authUrl, authDto).subscribe(
      (data) => {
        console.log('Request Success. ' + data);
      },
      (error) => {
        console.log('Error. ' + error);
      }
    );
  }

  public createAccount(
    password: string,
    name: string,
    dateofbirth: string,
    email: string,
    phone: string,
    agreementIsChecked: boolean
  ) {
    let createAccDto = {
      Password: password,
      Name: name,
      DateOfBirth: dateofbirth,
      Email: email,
      Phone: phone,
      AgreementIsChecked: agreementIsChecked,
    };
    console.log(createAccDto);
    let createAccUrl = 'https://localhost:5001/api/Account/registration';

    this.post(createAccUrl, createAccDto).subscribe(
      (data) => {
        console.log('Request Success. ' + data);
      },
      (error) => {
        console.log('Error. ' + error);
      }
    );
  }
}
