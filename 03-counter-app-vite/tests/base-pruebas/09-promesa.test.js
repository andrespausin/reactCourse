import { getHeroeByIdAsync } from '../../src/basepruebas-220616-140151/base-pruebas/09-promesas'

describe("Pruebas en el archivo 09-promesa.js", () => {
  test('getHeroesByIdAsync debe retornar un heroe', (done) => { 
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        })
        done()
      })
  })
  test('getHeroesByIdAsync debe obtener un error', (done) => { 
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy();
        done('No se esperaba que se resolviera la promesa')
      })
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe')
        done()
      })
  })
})