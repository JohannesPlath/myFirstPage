import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './core/login/login.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {AdminSelectPageComponent} from './core/adminManagemaent/admin-select-page/admin-select-page.component';
import {StudentsManagementComponent} from './core/adminManagemaent/students-management/students-management.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StudentWorkComponent} from './core/StudentThings/student-work/student-work.component';
import {StuffManagementComponent} from './core/adminManagemaent/stuff-management/stuff-management.component';
import {AdminAddStdentComponent} from './core/adminManagemaent/admin-add-student/admin-add-stdent.component';
import {DiclaimerComponent} from './core/disclaimer/diclaimer.component';
import {NewAccountComponent} from './core/new-account/new-account.component';
import {SharedComponent} from './shared/shared.component';
import {ServiceComponent} from './service/service.component';
import {CoreComponent} from './core/core.component';

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
    NewAccountComponent,
    SharedComponent,
    ServiceComponent,
    CoreComponent
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
