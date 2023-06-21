import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaViagensComponent } from './lista-viagens/lista-viagens.component';
import { ExcluirViagensComponent } from './excluir-viagens/excluir-viagens.component';
import { DetalheViagensComponent } from './detalhe-viagens/detalhe-viagens.component';
import { CriarViagensComponent } from './criar-viagens/criar-viagens.component';

const routes: Routes = [
  {path:'' , component:ListaViagensComponent},
  {path:'excluir' ,component:ExcluirViagensComponent},
  {path:'detalhe' ,component:DetalheViagensComponent},
  {path:'criar' ,component:CriarViagensComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
