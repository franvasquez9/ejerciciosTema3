
//Primera Parte 

//Crear una función con tres parámetros que sean números que se suman entre sí.
function suma ( a, b, c ) {
    return a + b + c;
    
}
//Llamar a la función en el main y darle valores.
var num1 = 10;
var num2 = 20;
var num3 = 30;
console.log('el resultado es: ' + suma(num1, num2, num3));



//Segunda Parte

//Crear una clase coche. (cree un objeto)
const coche = {
    puertas: 4, // variable nuemerica que almacena el numero de puertas
    tipo: 'sedam',
    color: 'negro',
}
console.log(`Coche tipo ${coche.tipo} de color ${coche.color} con ${coche.puertas} puertas`);

// Funcion que incrementa el numero de puertas
function anadirPuertas(){
    const nuevaPuerta = coche.puertas + 1;
    coche.puertas = nuevaPuerta;
    
}
//añadirle una puerta
anadirPuertas();
//mostrar el numero de puertas
console.log(`Ahora el coche tiene: ${coche.puertas} puertas`);