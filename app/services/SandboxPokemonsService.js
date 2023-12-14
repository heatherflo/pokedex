import { api } from "./AxiosService.js"




class SandboxPokemonsService {

  async getPokemon() {
    let response = await api.get('api/pokemon')
    console.log('sandbox poke', '📡', response)
  }



}

export const sandboxPokemonsService = new SandboxPokemonsService()