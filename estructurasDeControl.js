// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {

        if (numero % 2 === 0) { // verifica si es par o impar
            console.log("El número es par");
        } else {
            console.log("El número es impar");
        }
    }
   verificarParidad(4);  // debe de ser El número es par  caso contrario que le pongas un 7 por ej sería impar :D


// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // verifica si es menor, adulto o adulto mayor 
    if (edad < 18) {  
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) { 
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}

clasificarEdad(17);  //  Menor de edad,  pero si le cambias a 70 años por ejem seria adulto mayor


// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Verificamos que el número sea positivo
    if (numero < 0) {
        console.log("El número debe ser un entero positivo.");
        return;
    }

    while (numero >= 0) {
        console.log(numero); // Imprime el número actual
        numero--; // Decrementa el número en 1
    }

}
cuentaRegresiva(5);  // seria 5, 4, 3, 2, 1, 0,  y si le pones -1 sería que el numero debe de ser positivo

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0; //  Aca inicializamos un contador en = 0

    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++; // se incrementa el contador en 1
    } while (contador < 5); // se repite mientras el contador sea menor que 5
}
repetirMensaje();

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
     // Verificamos que el número sea positivo
     if (numero < 0) {
        console.log("El número debe ser un entero positivo.");
        return;
    }

    // Bucle for para imprimir números pares
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) { // Verificamos si el número es par
            console.log(i); // Imprimimos el número par
        }
    }
}
imprimirPares(10);  // aca seria  0, 2, 4, 6, 8, 10, y si le pones un -1 te va decir que el número debe ser un entero positivo

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break; // Detenemos el bucle cuando el número es 6
        }
        console.log(i); // Imprimimos el número actual
    }
}

detenerEnSeis();

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Saltamos el número 5 y continuamos con el siguiente
        }
        console.log(i); // Imprimimos el número actual
    }
}
saltarCinco();
// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    let diaSemana;

    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Número no válido. Debe estar entre 1 y 7.";
    }
    return diaSemana;
}
console.log(obtenerDiaSemana(1)); // en este caso va salir en consola lunes, pero podes ir cambiando los numeros y te aparecen las semana que pidas.//

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A': // En 
        case 'E': // caso que lo pongan en mayuscula...
        case 'I': // 
        case 'O': // 
        case 'U': // 
            return true; // Es una vocal
        default:
            return false; // No es una vocal
    }
}
console.log(esVocal('a')); // true, podes elegir otras vocales si le pones z por ejemplo diria false...

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
     // Verifica si todos son positivos
     if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos.";
    }
    // Verifica si al menos uno es negativo
    else if (a < 0 || b < 0 || c < 0) {
        // Verifica si todos son negativos
        if (a < 0 && b < 0 && c < 0) {
            return "Todos son negativos.";
        }
        return "Al menos uno es negativo.";
    }
    // Si no cumple las anteriores condiciones, todos son cero o una combinación de cero y positivo
    return "Todos son cero o positivos y negativos.";
}
console.log(evaluarNumeros(5, 10, 15)); // aca saldría que todos son positivos, pero si al 5 le ponemos como -5 diria que uno almenos es negativo
// o tmabien podria ser que todos sean negativos..

// Exportar todas las funciones
module.exports = {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};