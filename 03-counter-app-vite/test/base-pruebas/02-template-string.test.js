import getSaludo from '../../src/base-pruebas/02-template-string'
describe('Pruebas en el archivo 02-template-string', () => { 
    test('getSaludo debe de retornar "Hola Juan" ', () => {
        const name='Juan';
        const mensaje=getSaludo(name);
        expect(mensaje).toBe(`Hola ${name}`)

        
     });
 });