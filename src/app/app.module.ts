import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { EntradaDeNotasComponent } from './components/entrada-de-notas/entrada-de-notas.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { ComponentsComponent } from './components/components.component';
import { SairComponent } from './components/sair/sair.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReservasComponent,
    CadastrosComponent,
    FaturamentoComponent,
    EntradaDeNotasComponent,
    FinanceiroComponent,
    RelatoriosComponent,
    AcessoComponent,
    ConfiguracoesComponent,
    ComponentsComponent,
    SairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
