import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaViagensComponent } from './lista-viagens/lista-viagens.component';
import { DetalheViagensComponent } from './detalhe-viagens/detalhe-viagens.component';
import { ExcluirViagensComponent } from './excluir-viagens/excluir-viagens.component';
import { CriarViagensComponent } from './criar-viagens/criar-viagens.component';
import { ViagemComponent } from './viagem/viagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaViagensComponent,
    DetalheViagensComponent,
    ExcluirViagensComponent,
    CriarViagensComponent,
    ViagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
