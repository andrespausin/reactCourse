import { getHeroById } from "./05-import-export.js";

const timeout = 2000; // 2 seconds

// const promise = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(6);
//     if (hero) {
//       resolve(hero);
//     } else {
//       reject('Hero not found');
//     }
//   }, timeout);
// });

// promise
//   .then((hero) => {
//     console.log(`Hero found after ${timeout} seconds:`, hero);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   })
//   .finally(() => {
//     console.log('Promise completed');
// })

const getHeroByIdAsync = async (id) => {
  const hero = new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject('Hero not found');
      }
    }, timeout);
  });
  return hero;
}

getHeroByIdAsync(1)
  .then( console.log  )
  .catch((error) => {
    console.error('Error:', error);
  })