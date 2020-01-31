import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPorAssunto } from './filtro-por-assunto.pipe';



@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    FiltroPorAssunto
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
