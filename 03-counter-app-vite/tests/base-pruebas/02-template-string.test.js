import { getSaludo } from "../../src/basepruebas-220616-140151/base-pruebas/02-template-string";

describe("Tests in 02-template-string.test.js", () => {
    test("Debe retornar un string", () => {
        const name = "Fernando";
        const message = getSaludo(name);
        expect(message).toBe("Hola " + name + "!");
    })
})