import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(5)]),
    password: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  });

  constructor(
    private httpClient: HttpClient,
    private pageService : PageService
  ) { }

  ngOnInit() {
    this.pageService.defineTitulo('Cadastro')
  }

  validaImagem(campoAvatar: FormControl) {

    return this.httpClient
      .head(campoAvatar.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
    //força o código a aguardar o retorno da requisição
    // return new Promise(resolve => resolve());


  }

  // validarTodosOsCamposDosFormularios() {
  //   this.formCadastro.markAllAsTouched();
  //   // Object.keys(camposForm).forEach(field => {
  //   //   const control = this.formCadastro.get(field);
  //   //   control.markAsTouched({ onlySelf: true });
  //   // });
  // }

  handleCadastroUsuario() {
    if (this.formCadastro.valid) {

      const userData = new User(this.formCadastro.value);
      console.log(userData);
      this.httpClient.post('http://localhost:5000/users', userData)
        .subscribe(
          (resp) => {
            console.log(resp);
            this.formCadastro.reset();
          },
          erro => {
            console.log(erro);
          }

        )

      this.formCadastro.reset();

    } else {
      console.log('Campos invalidos');
      this.formCadastro.markAllAsTouched();
      // this.validarTodosOsCamposDosFormularios();
    }
  }

}
