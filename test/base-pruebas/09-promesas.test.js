import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe ', (done) => {

        const id = 5;
        getHeroeByIdAsync( id )
            .then(heroe => {
                
                expect( heroe ).toEqual(heroes.find( heroe => heroe.id === id))
                   

                done()
            })
    })

    test('getHeroeByIdAsync debe obtener un error ', (done) => {

        const id = 100;
        getHeroeByIdAsync( id )
            .catch(error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            })
    })
})
