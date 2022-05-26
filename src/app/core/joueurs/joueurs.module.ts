import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoueursRoutingModule } from './joueurs-routing.module';
import { JoueursComponent } from './joueurs.component';


@NgModule({
  declarations: [
    JoueursComponent
  ],
  imports: [
    CommonModule,
    JoueursRoutingModule
  ]
})
export class JoueursModule { }
