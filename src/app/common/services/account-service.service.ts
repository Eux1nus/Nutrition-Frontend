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
    email: string,
    dateofbirth: string,
    name: string,
    phone: string,
    agreementIsChecked: boolean
  ) {
    let createAccDto = {
      Password: password,
      Email: email,
      DateOfBirth: dateofbirth,
      Name: name,
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
