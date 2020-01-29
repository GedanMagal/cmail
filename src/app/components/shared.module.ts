import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';
import { HeaderComponent } from './header/header.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormFieldDirective,
    FormGroupComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormFieldDirective,
    FormGroupComponent,
    ListItemComponent
    ]
})
export class SharedModule { }
