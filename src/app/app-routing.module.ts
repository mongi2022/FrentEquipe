import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [

  {
    path:'joueurs',loadChildren : () => import('./core/joueurs/joueurs.module').then(j=>j.JoueursModule)
  },
  {
    path:'match',loadChildren :()=> import('./core/match/match.module').then(m => m.MatchModule)
  },
  {
    path:'equipe',loadChildren :()=> import('./core/equipe/equipe.module').then(m => m.EquipeModule)
  },



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
