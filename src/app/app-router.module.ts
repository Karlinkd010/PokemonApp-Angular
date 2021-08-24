import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon/pages/pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pages/pokemon/pokemon.component';


const routes:Routes=[
  {
    path:'',
    component: PokemonComponent,
    pathMatch:'full'
  },
  {
    path:'Home',
    component: PokemonComponent,
  
  },

  {

    path:'Pokemon/:id',
    component:PokemonDetailComponent
  },

  
  {
    path:'**',
    redirectTo:''
  }

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
