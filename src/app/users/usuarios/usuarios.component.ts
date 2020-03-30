import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(
    public api: ApiService,
    private router: Router
  ) { }
  
  detalleUsuario(id) {
    this.router.navigate(["usuario",id])
  }

  eliminarUsuario(index) {
    this.api.eliminarUsuario(index)
  }

  ngOnInit(): void { }

}
