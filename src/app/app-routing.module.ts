import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaginaUmComponent } from './pagina-um/pagina-um.component';
import { PaginaDoisComponent } from './pagina-dois/pagina-dois.component';
import { PrincipalComponent } from './principal/principal.component';
import { isAdminGuard } from './services/guards/is-admin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PrincipalComponent, canActivate: [isAdminGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [isAdminGuard] },
      { path: 'pagina-um', component: PaginaUmComponent, canActivate: [isAdminGuard] },
      { path: 'pagina-dois', component: PaginaDoisComponent, canActivate: [isAdminGuard] },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
