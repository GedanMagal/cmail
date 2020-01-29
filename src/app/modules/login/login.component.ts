import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  msgErro: string = '';

  constructor(
    private roteador: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.formLogin.value)
    if (this.formLogin.valid) {
      this.loginService.logar(this.formLogin.value)
        .subscribe(
          () => {
          this.roteador.navigate(['/inbox']);
        },
          (responseError: HttpErrorResponse) => {
            console.log(responseError);
            this.msgErro = responseError.error.message;
          });
    } else {
      this.formLogin.markAllAsTouched();
      return;
    }
  }
}


