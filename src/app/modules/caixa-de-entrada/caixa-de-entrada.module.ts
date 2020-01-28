import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';



@NgModule({
  declarations: [
    CaixaDeEntradaComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CaixaDeEntradaRoutingModule
  ]
})
export class CaixaDeEntradaModule { }
