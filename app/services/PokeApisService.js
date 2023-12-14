import { Pokemon } from "../models/Pokemon.js";
import { baseURL } from "../env.js";
import { AppState } from "../AppState.js";



// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

class PokeApiService {


  async getApiPoke() {
    const response = await pokeApi.get('pokemon')
    console.log('pokemon name', response.data)
    AppState.pokeApiPokemons = response.data.results
  }
}

export const pokeApiService = new PokeApiService()