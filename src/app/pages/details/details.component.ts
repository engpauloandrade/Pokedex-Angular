import { PokeListComponent } from './../../shared/poke-list/poke-list.component';
import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(
    private activedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const id = this.activedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(
      '${this.urlPokemon}${id}'
    );
    const name = this.pokeApiService.apiGetPokemon('${this.urlName}${id}');

    return forkJoin([pokemon, name]).subscribe((results) => {});
  }
}
