
//import {owners} from './data/heroes'

import superHeroes from '../data/heroes'

// getHeroById (id)
// funciones de Flecha
// find

const getHeroById = (id)=>superHeroes.find(hero=>hero.id===id)

// getHeroesByOwner 'DC','Marvel'
// []
const getHeroesByOwner=(owner)=>superHeroes.filter(heros=>heros.owner===owner)

export {getHeroById,getHeroesByOwner};