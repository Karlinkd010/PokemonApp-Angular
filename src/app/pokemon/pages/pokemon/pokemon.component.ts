import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {

  data: any[] = [];

  constructor(private SerPokemom:PokemonService) {
   }

  ngOnInit(): void {
    this.get_imagen();
  }

  get_imagen(){
    let pokemonData;
    for (let i = 1; i <= 50; i++) {      
    this.SerPokemom.getPokemonName(i)
      .subscribe(data=>{
        pokemonData = {
          position: i,
          image: data.sprites.front_default,
          name: data.name,
          habilidad:data.abilities
        };
        this.data.push(pokemonData);
      })
    }
  }
  
}
