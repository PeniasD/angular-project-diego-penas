import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './users/home/home.component';
import { UsuariosComponent } from './users/usuarios/usuarios.component';
import { GuardsGuard } from './guards.guard';
import { UsuarioComponent } from './users/usuario/usuario.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'usuario/:id', component: UsuarioComponent},
  { path: 'usuarios', component: UsuariosComponent, canActivate:[GuardsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
