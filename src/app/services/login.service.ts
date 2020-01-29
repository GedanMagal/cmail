import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../modules/models/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = 'http://localhost:5000/login';

  constructor(
    private httpCliente: HttpClient
  ) { }

  logar(dadosLogin) {
    return this.httpCliente.post(this.api, dadosLogin)
      .pipe(
        map((response: ResponseModel) => {
          localStorage.setItem('mail-token',
            response.token);
          return response
        })
      )
  }
}
