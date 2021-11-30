import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {AdminSelectPageComponent} from "./admin-select-page/admin-select-page.component";
import {StudentsManagementComponent} from "./students-management/students-management.component";
import {StudentWorkComponent} from "./student-work/student-work.component";
import {StuffManagementComponent} from "./stuff-management/stuff-management.component";
import {AdminAddStdentComponent} from "./admin-add-student/admin-add-stdent.component";
import {DiclaimerComponent} from "./diclaimer/diclaimer.component";
import {NewAccountComponent} from "./new-account/new-account.component";

const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
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
