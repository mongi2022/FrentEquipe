import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipe } from './equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
equipe!:Equipe[]
baseApi=environment.baseAPI
  constructor(private _http:HttpClient) { }
  getall():Observable<Equipe[]>{
    return this._http.get<Equipe[]>(this.baseApi)
  }

}
