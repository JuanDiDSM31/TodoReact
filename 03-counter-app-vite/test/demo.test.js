describe('pruebas en demotest', () => {  
    test('Esta prueba no debe fallar'), ()=>{
        //    1. inicialización
        const mensaje='Hola mundo'
        // 2.estimulo
        const mensaje2=mensaje.trim;
        // 3. observar el comportamiento esperado
        espect(mensaje).toBe(mensaje2);
        }

})

// test('Esta prueba no debe fallar'), ()=>{
// //    1. inicialización
// const mensaje='Hola mundo'
// // 2.estimulo
// const mensaje2=mensaje.trim;
// // 3. observar el comportamiento esperado
// espect(mensaje).toBe(mensaje2);
// }