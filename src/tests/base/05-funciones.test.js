import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe("Pruebas en 05-funciones ", () => {

  test("getUser debe de retornar un objeto", () => {

    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect( user ).toEqual( userTest );
  });

  //toEqual -> indica si un objeto tiene las mismas propiedades no si es igual
   
  test('getUsuarioActivo debe de retornar un objeto ', () => {
      
    const nombre = 'Leslie'

    const user = getUsuarioActivo(nombre);
    
    expect( user ).toEqual({
        uid: 'ABC567',
        username: nombre
    });

  })
  
});
