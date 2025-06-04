import heroes from "../../src/data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../src/basepruebas-220616-140151/base-pruebas/08-imp-exp";

describe("Pruebas en el archivo 08-imp-exp.test.js", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1
    const getHeore = getHeroeById(id);
    expect(getHeore.id).toBe(id);
  })

  test("getHeroeById debe retornar undefined si el heroe no existe", () => {
    const id = 10
    const getHeore = getHeroeById(id);
    expect(getHeore).toBe(undefined);
  })

  test("getHeroByOwner debe retornar un arreglo con los heroes de DC, cuyo length sea 3", () => {
    const owner = "DC"
    const getHeores = getHeroesByOwner(owner)
    expect(getHeores.length).toBe(3);
    expect(getHeores).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    }
    ])
  })

  test("getHeroByOwner debe retornar un arreglo con los heores de Marvel, cuyo length sea 2", () => {
    const owner = "Marvel"
    const getHeores = getHeroesByOwner(owner)
    expect(getHeores.length).toBe(2);
    expect(getHeores).toEqual([
      {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
      },
      {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
      }
    ])
  })

  // Extra 
  test("getHeroeByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "Camelo"
    const getHeroes = getHeroesByOwner(owner);
    console.log(getHeroes);
    getHeroes.length !== 0 ? getHeroes.forEach((heroe) => {
      expect(heroe.owner).toBe(owner)
    })
    : expect(getHeroes.length).toBe(0);
  })
})