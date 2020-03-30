import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service';
import { iUsuario } from '../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  user : iUsuario;
  usuarioId: number;
  constructor( public route:ActivatedRoute, public api : ApiService) { 
     this.route.paramMap.subscribe((res)=>{console.log(res.get('id'))
     this.usuarioId = parseInt(res.get('id'))
    })
  }
  
  ngOnInit(): void {
    this.user=this.api.Usuarios[this.usuarioId]
  }
}
