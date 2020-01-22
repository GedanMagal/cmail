import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent {
  private _isNewEmailOpen = false;
  
  //Lista de emails - Sendo percorrida no Html para pegar todos os emails enviados pelo formulario tratado
  emailList = [];
  //Formularios
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  //Deixando privado para que não seja possível acessar de fora
  get isNewEmailOpen()
  {
    return this._isNewEmailOpen;
  }

  toggleMail(){
    this._isNewEmailOpen = !this._isNewEmailOpen; 
  }

  //evento de captura de valores do formulario e a key referente a cada elemento referencia no html
  //Possível fazer com two-way data binding ([ngModel ]) - Verificar na apostila por volta da pagina 53
  //setValue(event, key)
  //{
   //const value =  event.target.value;
    //this.email[key] = value;
 // }

  handleEmail(form : NgForm){
    console.log(form);
    //Verifica se o formulario é valido
    if(form.invalid) return;
    this.emailList.push(this.email);
    console.log(this.email);
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
    
    form.reset();
    this.toggleMail();

    // //Fazendo com que o formulario não atualize. É necessário chamar o evento no formulario
    // event.preventDefault();

    // //Adicionando o email a lista de emails
    // this.emailList.push(this.email);
    // console.log(this.email);
    // //Limpando o objeto
    // this.email = {
    //   destinatario: '',
    //   assunto: '',
    //   conteudo: ''
    // }


  }
}
