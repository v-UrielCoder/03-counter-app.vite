
describe('Pruebas en <DemoComponent>', () => { 
    
    test('Esta prueba no debe de falla', () => {

        //1. Inicialozacion
        const message = 'Hola mundo';
        //2. Estimulo
        const message2 = message.trim();
        //3. Observar comportamiento esperado ..
        expect( message ).toBe( message2 );
        
    })

 })

