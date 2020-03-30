import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { iUsuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Usuarios: iUsuario[]
  URL="https://jsonplaceholder.typicode.com/users"

  guarda: boolean


  constructor(private http: HttpClient) {
    this.getUsuarios()
   }

getUsuarios() {
  this.http.get<iUsuario[]>(this.URL).subscribe
  (
    res =>{
      this.Usuarios = res 
      console.log(this.Usuarios)
    },
    err => console.log(err)
  );


}
eliminarUsuario(index) {
  this.Usuarios.splice(index, 1)
  console.log(index)
}

}