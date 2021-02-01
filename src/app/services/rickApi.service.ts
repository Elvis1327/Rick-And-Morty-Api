import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RickApiService{
  constructor( private http: HttpClient ){}

  getRickApi(){
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(
      map((res: any)=>{
        return res.results;
      })
    )
  };
};
