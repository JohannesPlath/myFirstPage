import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {AdminSelectPageComponent} from "./core/adminManagemaent/admin-select-page/admin-select-page.component";
import {StudentsManagementComponent} from "./core/adminManagemaent/students-management/students-management.component";
import {StudentWorkComponent} from "./core/StudentThings/student-work/student-work.component";
import {StuffManagementComponent} from "./core/adminManagemaent/stuff-management/stuff-management.component";
import {AdminAddStdentComponent} from "./core/adminManagemaent/admin-add-student/admin-add-stdent.component";
import {DiclaimerComponent} from "./core/disclaimer/diclaimer.component";
import {NewAccountComponent} from "./core/new-account/new-account.component";

const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin-select', component: AdminSelectPageComponent},
    {path: 'student-work', component: StudentWorkComponent},
    {path: 'student-management', component: StudentsManagementComponent},
    {path: 'stuff-management', component: StuffManagementComponent},
    {path: 'new-account', component: NewAccountComponent},
    {path: 'disclaimer', component: DiclaimerComponent},
    {path: 'adminAddStudent', component: AdminAddStdentComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
