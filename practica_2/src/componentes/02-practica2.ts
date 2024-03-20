
//Practica 2: Definir una Interfaz para un Personaje


//#region Ejercicio 1: Definir una Interfaz para un Personaje

/*
Objetivo: Crea una interfaz para un personaje de videojuego que incluya propiedades para el nombre, 
puntos de vida (HP), habilidades (como un arreglo de strings) y el pueblo natal (opcional).
 */

interface personajes{

    nombre:string;
    puntos_de_vida:number;
    habilidades:string[];
    punto?:number;

}


// console.log(test.habilidades)
//#endregion

//#region Ejercicio 2: Interfaz para Objetos con Propiedades Anidadas

/*
Objetivo: Define una interfaz para un objeto que represente un libro,
 incluyendo propiedades para el título, el año de publicación, y el autor,
 donde el autor a su vez es un objeto con propiedades para el nombre y la nacionalidad.
*/

interface libro{
    titulo:string;
    anioPublicacion:number; 

    autor:{
        nombre:string;
        nacionalidad:string;
    }
}

//#endregion

//#region Ejercicio 3: Interfaz para Arrays de Objetos

/*
Objetivo: Utiliza interfaces para crear un arreglo de objetos que representen empleados, 
cada uno con un nombre, ID y departamento.
*/
interface Empleado
{
    empleado:{
        ID : number[];
        nombre : string[];
        departamento :any[];

    }
}


//#endregion

//#region Ejercicio 4: Extender Interfaces

/*
Objetivo: 
Crea una interfaz PersonajeExtendido que extienda de la interfaz Personaje del Ejercicio 1,
agregando una nueva propiedad para la experiencia (xp).
*/



interface PersonajeExtendido extends personajes{

    experiencia:any;
}
//#endregion

//#region Ejercicio 5: Interfaz con Métodos
/*
  Objetivo: 
   Define una interfaz para un objeto "CuentaBancaria" que incluya
   propiedades para el saldo y un método para depositar dinero en la cuenta. */

interface CuentaBancaria{
    saldo:number;
    depositar_dinero(): void;
}

//#endregion


export {};