import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/views/login-form/login-form.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AccountServiceService } from './common/services/account-service.service';
import { HttpModule } from '@angular/http';
import { RegistrationComponent } from './components/views/registration/registration.component';
import { RegistrationSuccsessComponent } from './components/views/registration/registration-succsess/registration-succsess/registration-succsess.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    MenuComponent,
    RegistrationComponent,
    RegistrationSuccsessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [
    AccountServiceService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
