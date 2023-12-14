import { AppState } from "../AppState.js";


export class Pokemon {
  constructor(data) {
    this.name = data.name,
      this.nickName = data.nickName,
      this.img = data.img,
      this.weight = data.weight,
      this.height = data.height,
      this.types = data.types,
      this.creatorId = data.creatorId
  }


  static pokemanCard(apiPokemon) {
    return `${apiPokemon.name}`
  }


}





// {
//   "name": {
//     "type": "String",
//     "required": true,
//     "maxLength": 100
//   },
//   "nickName": {
//     "type": "String",
//     "maxLength": 100
//   },
//   "img": {
//     "type": "String",
//     "required": true,
//     "maxLength": 500
//   },
//   "weight": {
//     "type": "String",
//     "maxLength": 100
//   },
//   "height": {
//     "type": "String",
//     "maxLength": 100
//   },
//   "types": [
//     {}
//   ],
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true,
//     "ref": "Account"
//   }
// }
// Post
// Project
// Quote
// Spell
// Todo
// Weather
// Made with 💖 by CodeWorks