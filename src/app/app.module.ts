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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    AdminSelectPageComponent,
    StudentsManagementComponent,
    StudentWorkComponent
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
