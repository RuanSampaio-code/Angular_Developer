//injeção do angular core
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importando enviorment
import {environment} from 'src/environments/environment'
import {Observable, observable} from 'rxjs'; //paradigma funcional
import {PokemonData} from '../moduls/pokemonData';

@Injectable({
  providedIn: 'root' //caminho raiz
})

//classe typescript
export class PokemonService {
  private baseURL:string = ""
  private pokedata:PokemonData | any

  constructor (private http:HttpClient) {
    this.baseURL = environment.pokeapi
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    //utilizando metodos
    this.pokedata = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`)

    return this.pokedata
  }
}
