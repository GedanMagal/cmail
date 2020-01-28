import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  const rotas: Routes =[
    {
      path: 'cadastro',
      loadChildren: () =>
      import('./modules/cadastro/cadastro.module')
      .then(m => m.CadastroModule)
    },
    {
      path: 'caixa-de-entrada',
      loadChildren: () =>
      import('./modules/caixa-de-entrada/caixa-de-entrada.module')
      .then(m => m.CaixaDeEntradaModule)
    },
    {
      path: 'login',
      loadChildren: () =>
      import('./modules/login/login.module')
      .then(m => m.LoginModule)
    },
    {
      path: '**',
      redirectTo: 'login',
      pathMatch: 'full'
    }
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
