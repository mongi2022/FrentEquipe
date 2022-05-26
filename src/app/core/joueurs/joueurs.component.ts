import { Component, OnInit } from '@angular/core';

import { Joueurs } from './joueurs';

import { JoueursService } from './joueurs.service';

@Component({
  selector: 'app-joueurs',

  templateUrl: './joueurs.component.html',

  styleUrls: ['./joueurs.component.css'],
})
export class JoueursComponent implements OnInit {
  joueurs!: Joueurs[];

  constructor(private joueursService: JoueursService) {}

  ngOnInit(): void {
    this.getAllJoueurs();
  }

  getAllJoueurs() {
    return this.joueursService.getAllJoueurs().subscribe((data) => {
      this.joueurs = data;
    });
  }
}
