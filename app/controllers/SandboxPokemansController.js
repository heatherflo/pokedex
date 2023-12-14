
import { AppState } from "../AppState.js"
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js"
import { Pop } from "../utils/Pop.js"





export class SandboxPokemonsController {
  constructor() {
    console.log('getting started', '🏁')
    // this.getPokemon() if we get this on page load, it happens before our auth credentials arrive
    AppState.on('account', this.getPokemon)

  }

  async getPokemon() {
    try {
      await sandboxPokemonsService.getPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }


}