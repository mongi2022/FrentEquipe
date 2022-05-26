import { Component, OnInit } from '@angular/core';

import { MatchService } from './match.service';

import { Match } from './match';

@Component({
  selector: 'app-match',

  templateUrl: './match.component.html',

  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  match!: Match[];

  constructor(private _matchService: MatchService) {}

  ngOnInit(): void {
    this.getAllMatchs();
  }

  getAllMatchs() {
    this._matchService.getAllMatchs().subscribe((data) => {
      this.match = data;

      console.log(this.match);
    });
  }
}
