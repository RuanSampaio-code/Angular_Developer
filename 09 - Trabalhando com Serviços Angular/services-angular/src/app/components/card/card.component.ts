import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/moduls/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id:0,
    name:'',
    sprites:{
      front_default : ''
    },
    types:[]
  }
  attributeTypes:string[] = ['FIRE', 'ROCK']

  constructor(
    private service:PokemonService
  ) {
    this.pokemon  = {
      id:0,
      name:'',
      sprites:{
        front_default : ''
         },
        types:[]

    }

  }

  ngOnInit(): void {
    //injetando server em um componet
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,

          }
        },
        error: (err) => console.log(err),


      }
    )
    console.log('not found 404')


  }
}
