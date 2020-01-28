import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

const rotasCaixaDeEntrada : Routes = [
  {path: '', component: CaixaDeEntradaComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotasCaixaDeEntrada)
  ],
  exports:[
    RouterModule
  ]
})
export class CaixaDeEntradaRoutingModule { }
