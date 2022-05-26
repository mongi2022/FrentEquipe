import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs.component';

const routes: Routes = [
{
  path:'',component:JoueursComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoueursRoutingModule { }
