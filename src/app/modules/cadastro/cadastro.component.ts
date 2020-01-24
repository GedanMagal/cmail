import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('',[Validators.required,Validators.maxLength(6), Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]),
    avatar: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
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
      this.formCadastro.reset();

    } else {
      console.log('Campos invalidos');
      this.formCadastro.markAllAsTouched();
      // this.validarTodosOsCamposDosFormularios();
    }
  }

}
