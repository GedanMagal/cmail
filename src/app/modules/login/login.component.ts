import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.formLogin.value);
    if (this.formLogin.valid) {
      console.log(this.formLogin.get('email').value);
      this.httpClient
        .post('http://localhost:5000/login', this.formLogin.value)
        .subscribe((response: any) => {
          console.log(response);
          console.log('deu bom carai');
          localStorage.setItem('cmail-token', response.token);
        },
          (err) => {
            console.log(err);
            console.log('deu ruim carai');
          });

    } else {
      this.formLogin.markAllAsTouched();
      return;
    }

  }

}


