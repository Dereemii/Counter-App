import { getSaludo } from "../../base/02-template-string";
import "@testing-library/jest-dom"; 

describe('Pruebas en 02-template string js ', () => {
    
    test(' getSaludo debe retornar hola fernando ', () => {
        const nombre = "Fernando";

        const saludo = getSaludo( nombre );

       // expect( saludo ).toBe( "Hola" + nombre )
    })
    
})
