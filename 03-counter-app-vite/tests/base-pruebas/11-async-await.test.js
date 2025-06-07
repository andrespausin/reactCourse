import { getImagen } from '../../src/basepruebas-220616-140151/base-pruebas/11-async-await';	

describe('Pruebas con async/await y fetch', () => {
  test('getImagen debe retornar una URL de imagen', async () => {
    const resp = await getImagen();
    expect(resp).toInclude('https://');
  })

  test('getImagen debe retornar un mensaje de error si falla la petición', async () => {
    const resp = await getImagen();
    expect(resp).toBe('No se encontró la imagen');
  })
})