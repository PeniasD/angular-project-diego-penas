import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'usuarios', component: UsuariosComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
