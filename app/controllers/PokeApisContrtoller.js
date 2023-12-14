import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "../services/AxiosService.js";
import { pokeApiService } from "../services/PokeApisService.js";
import { Pop } from "../utils/Pop.js";


function _drawApiPokemon() {

  const pokeApiPokemons = AppState.pokeApiPokemons
  console.log('PokePoke')
  let content = ''
  pokeApiPokemons.forEach(apiPokemon => content += Pokemon.pokemanCard(apiPokemon))
  document.getElementById('pokemon-list').innerHTML = content
  console.log(content)
}


export class PokeApiController {
  constructor() {
    console.log('getting Api Poke')
    this.getApiPoke()
    AppState.on('pokeApiPokemons', _drawApiPokemon)




  }

  async getApiPoke() {
    try {
      await pokeApiService.getApiPoke()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }



}