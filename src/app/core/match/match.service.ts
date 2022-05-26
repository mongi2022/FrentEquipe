import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  match!: Match[];

  baseApi=environment.baseAPI
  constructor(private _http: HttpClient) { }
  getAllMatchs(): Observable<Match[]> {

    return this._http.get<Match[]>(this.baseApi);

  }
}
