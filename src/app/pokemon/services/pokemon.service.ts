import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonRes} from 'src/app/interfaces/interface.pokemon';
import { PokemonID } from 'src/app/interfaces/interface.pokemon_id';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url:string='https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getPokemon():Observable<PokemonRes>{

    return this.http.get<PokemonRes>(this.url);
    
  }

  getPokemonName(index:number):Observable<PokemonID>{
    const url_api=`${this.url}${index}`;

    return this.http.get<PokemonID>(url_api);
  }
}
