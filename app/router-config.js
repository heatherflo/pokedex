import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokeApiController } from "./controllers/PokeApisContrtoller.js";
import { SandboxPokemonsController } from "./controllers/SandboxPokemansController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [SandboxPokemonsController, PokeApiController],
    view: 'app/views/HomeView.html'

  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




