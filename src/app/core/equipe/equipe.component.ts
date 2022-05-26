import { Component, OnInit } from '@angular/core';
import { Equipe } from './equipe';
import { EquipeService } from './equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
})
export class EquipeComponent implements OnInit {
  equipe!: Equipe[];
  constructor(private _service: EquipeService) {}

  ngOnInit(): void {
    this.getAllController();
  }
  getAllController() {
    this._service.getall().subscribe((data) => {
      this.equipe = data;
    });
  }
}
