import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes do projeto
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatRadioModule } from '@angular/material/radio'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';



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
    SairComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
