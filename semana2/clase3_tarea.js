// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {
let edades = [];
let edad=0;
let contadormenores=0;
let contadormayores=0;
respuesta='1';
while (respuesta==='1') {
 edad = await ask('¿Qué edad deseas añadir?: \n'); 
 edades.push(edad); 
 respuesta = await ask('¿Deseas añadir otra edad?: \n1. Si \n2. No \n');  
}
 console.log(edades);

 for (let i = 0; i < edades.length; i++) {
    if (edades[i]<18) {
        contadormenores++;
    } else {
        contadormayores++;
    }
 }

 console.log('menores:'+contadormenores);
 console.log('mayores:'+contadormayores);
}
main();
