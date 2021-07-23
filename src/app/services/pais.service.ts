import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises(){
    const url = 'https://restcountries.eu/rest/v2/lang/es'
    return this.http.get(url)
    .pipe(
      map((resp:any[]) => 
        resp.map(pais => ({nombre: pais.name, codigo: pais.alpha3Code}))
      )
    )
  }
}
