import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { EntradaDeNotasComponent } from './components/entrada-de-notas/entrada-de-notas.component';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ReservasComponent } from './components/reservas/reservas.component';

const routes: Routes = [// quando a tela estiver vazia ira aparecer o componente  navcomponent 
  {
    path:'',
    component: NavComponent, children: [
      
        {path: 'acesso', component: AcessoComponent},
        {path: 'cadastro', component: CadastrosComponent},
        {path: 'configuracoes', component: ConfiguracoesComponent},
        {path: 'Entada-de-notas', component: EntradaDeNotasComponent},
        {path: 'faturamento', component: FaturamentoComponent},
        {path: 'financeiro', component: FinanceiroComponent},
        {path: 'relatorios', component: RelatoriosComponent},
        {path: 'reservas', component: ReservasComponent} // rotas filhas, reservas usadas d componente nav.
      ]
      } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
