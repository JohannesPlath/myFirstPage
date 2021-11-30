import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { AdminSelectPageComponent } from './admin-select-page/admin-select-page.component';
import { StudentsManagementComponent } from './students-management/students-management.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StudentWorkComponent } from './student-work/student-work.component';
import { StuffManagementComponent } from './stuff-management/stuff-management.component';
import { AdminAddStdentComponent } from './admin-add-stdent/admin-add-stdent.component';
import { DiclaimerComponent } from './diclaimer/diclaimer.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    AdminSelectPageComponent,
    StudentsManagementComponent,
    StudentWorkComponent,
    StuffManagementComponent,
    AdminAddStdentComponent,
    DiclaimerComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
