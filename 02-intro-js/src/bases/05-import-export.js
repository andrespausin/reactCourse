import { heroes } from '../data/heroes.js';

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
}

//
const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
}

// console.log(getHeroesByOwner('DC'));
