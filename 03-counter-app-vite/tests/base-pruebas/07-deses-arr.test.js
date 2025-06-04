import { retornaArreglo } from "../../src/basepruebas-220616-140151/base-pruebas/07-deses-arr";


describe("Pruebas en el archivo 07-deses-arr.test.js", () => {
  const [letters, numbers] = retornaArreglo();

  test("Debe retornar un string", () => {
    expect(letters).toBe("ABC");
    expect(typeof letters).toBe("string");
  })

  test("Debe retornar un numero", () => {
    expect(numbers).toBe(123)
    expect(typeof numbers).toBe("number");
  })
})