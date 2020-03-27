import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('myUser', { static: true }) myUser: ElementRef;
  @ViewChild('myPass', { static: true }) myPass: ElementRef;
  constructor(private api: ApiService, private router: Router) {

  }

  usuarioOriginal = "test";
  contrasenaOriginal = "Ayi+2020";
  ngOnInit(): void {

  }
  Validar() {

    let inputValue = this.myUser.nativeElement.value;
    let passValue = this.myPass.nativeElement.value;
    if (inputValue == this.usuarioOriginal && passValue == this.contrasenaOriginal) {
      this.api.guarda = true
      this.router.navigate (['/usuarios'])
    }
    else {
      alert('UserNoOk')
    }

  }

}
