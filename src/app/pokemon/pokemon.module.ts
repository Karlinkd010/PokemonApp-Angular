import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule,
    BrowserModule
  ],
  exports:[
    PokemonComponent,
    PokemonDetailComponent
  ]
})
export class PokemonModule { }
