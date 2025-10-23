// Calculadora básica
let numero1 =
parseFloat(prompt("Ingrese el primer número:")); 
let numero2 =
parseFloat(prompt("Ingrese el segundo número:"));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicación = numero1 * numero2;
let división = numero1 / numero2;
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicación);
console.log("División: " + división);

//Promedio de notas
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
let promedio = (nota1 + nota2 + nota3) / 3;
console.log("El promedio de las notas es: " + promedio);
alert("El promedio de las notas es: " + promedio);

// Gestor de estudiantes
let nombre = prompt("Ingrese el nombre del estudiante:");
let edad = prompt("Ingrese la edad del estudiante:");
let materias = prompt("Ingrese las materias separadas por comas (ej: Matemáticas, Programación, Inglés):");
// Convertimos la lista de materias en un arreglo
materias = materias.split(",").map(m => m.trim());

const estudiante = {
    nombre: nombre,
    edad: Number(edad),
    materias: materias,
    mostrarInfo: function() {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
        console.log("Materias: " + this.materias.join(", "));
    }
};

estudiante.mostrarInfo();


//Mayor y menor de un arreglo
let numerosTexto = prompt("Ingrese varios números separados por comas (ej: 8, 2, 14, 6, 9, 1):");
const numeros = numerosTexto.split(",").map(n => Number(n.trim()));
let mayor = numeros[0];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Lista de números: ", numeros);
console.log("Número mayor: " + mayor);
console.log("Número menor: " + menor);

//Ingreso de datos
let nombre_usuario = prompt("Ingrese su nombre:");
console.log("el nombre del usuario es " + nombre_usuario);
let edad_usuario = prompt("Ingrese su edad:");
console.log("la edad del usuario es " + edad_usuario);
let telefono_usuario = prompt("Ingrese su número de teléfono:");
console.log("el número de teléfono del usuario es " + telefono_usuario);
let peso_usuario = prompt("Ingrese su peso:");
console.log("el peso del usuario es " + peso_usuario);
let altura_usuario = prompt("Ingrese su altura:");
console.log("la altura del usuario es " + altura_usuario);


