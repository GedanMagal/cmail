import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';

import { Routes, RouterModule } from '@angular/router';

const rotas: Routes = [
    {path: '', component: LoginComponent},
    {path:'inbox', component: CaixaDeEntradaComponent},
    {path:'cadastro', component: CadastroComponent},
    {path: 'caixa-de-entrada', component: CaixaDeEntradaComponent},
    {path: 'login', component: LoginComponent}
]

export const ModuleRoteamento = RouterModule.forRoot(rotas);