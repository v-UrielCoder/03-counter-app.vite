import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

        
    })

    test('getHeroeById debe retornar undefined', () => {
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo de 3', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        expect( heroes.length ).toBe(3)
       

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
    })
    test('getHeroesByOwner debe retornar un arreglo de 2', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(2);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
        
    })
})  