import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas es 11-async-await', () => {

    test('getImagen debe de retornar un Url de la imagen', async() => {
        
        const url = await getImagen();
        
        expect(typeof url ).toEqual(expect.any(String))
    })
})