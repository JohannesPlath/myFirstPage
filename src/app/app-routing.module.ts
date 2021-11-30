import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {AdminSelectPageComponent} from "./admin-select-page/admin-select-page.component";

const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'admin-select', component: AdminSelectPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
