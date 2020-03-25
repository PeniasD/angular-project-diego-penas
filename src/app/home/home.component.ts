import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string;

  constructor( private router: Router) { 
    this.titulo = "Bienvenido a la App de Usuarios"
  }

  ngOnInit(): void {
  }

  redirec(url){
    this.router.navigateByUrl(`/${url}`)
  }

}
