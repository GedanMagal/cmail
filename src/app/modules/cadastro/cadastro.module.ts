import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro.component';
import { FormGroupComponent } from 'src/app/components/form-group/form-group.component';
import { FormFieldDirective } from 'src/app/components/form-group/form-field.directive';
import { SharedModule } from 'src/app/components/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    CadastroComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
