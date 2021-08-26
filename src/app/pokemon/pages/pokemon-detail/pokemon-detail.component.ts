import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [
  ]
})
export class PokemonDetailComponent implements OnInit {
  
  poke!:any;
  constructor(
    private actRoute:ActivatedRoute,
    private serPoke:PokemonService
    ) {}
    
  ngOnInit(): void {

    this.actRoute.params
    .pipe(
      switchMap(({id})=>this.serPoke.getPokemonName(id)),
      tap(console.log)
    ).subscribe(data=>this.poke=data)
  }

}




