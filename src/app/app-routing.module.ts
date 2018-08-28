import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { GeracaoComponent } from './containers/geracao/geracao.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'edicao',
    component: EdicaoComponent
  },
  {
    path: 'geracao',
    component: GeracaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
