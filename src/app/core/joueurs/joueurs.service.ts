import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Joueurs } from './joueurs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JoueursService {
  joueurs!: Joueurs[];

  baseApi = environment.baseAPI;

  constructor(private _http: HttpClient) {}

  getAllJoueurs(): Observable<Joueurs[]> {
    return this._http.get<Joueurs[]>(this.baseApi);
  }
}
