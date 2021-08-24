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
  responsiveOptions:any;
  constructor(
    private actRoute:ActivatedRoute,
    private serPoke:PokemonService

  ) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  

  ngOnInit(): void {

    this.actRoute.params
    .pipe(
      switchMap(({id})=>this.serPoke.getPokemonName(id)),
      tap(console.log)
    )
    .subscribe(pais=>this.poke=pais)
  }

  }




