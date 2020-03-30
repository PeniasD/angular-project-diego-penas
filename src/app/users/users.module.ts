import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UsuarioComponent,
    UsuariosComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
