import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-Funciones', () => { 

    test('getUser debe retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user )
    })

    test('getUsuarioActivo debe de retirnar un objeto', () => { 
        
        const nombre = 'Uriel';

        const user = getUsuarioActivo(nombre);

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})