import { getUser, getUsuarioActivo } from '../../src/basepruebas-220616-140151/base-pruebas/05-funciones';

describe("Pruebas en el archivo 05-funciones.test.js", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    expect(user).toEqual(testUser);
  })

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = 'Fernando'
    const testUser = {
      uid: 'ABC567',
      username: name
    }
    const user = getUsuarioActivo(name);
    expect(user).toEqual(testUser);
  })
})