//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function analizarCalificaciones(calificaciones) {
    data=[];
    let superados=obteneraprobados(calificaciones);
    data.push(superados);
    let suspendidos=obtenerreprobados(calificaciones);
    data.push(suspendidos);
    let media = obtenerpromedio(calificaciones);
    data.push(media);
    console.log (data);
}

function obteneraprobados(calificaciones){ 
    let aprobados=0;
    for (let i = 0; i < calificaciones.length; i++) { 
    if (calificaciones[i]>=70) {
        aprobados++;
    }
 } 
 console.log(aprobados);
 return aprobados;
}

function obtenerreprobados(calificaciones) {
    let reprobados=0;
    for (let i = 0; i < calificaciones.length; i++) { 
    if (calificaciones[i]<70) {
        reprobados++;
    }
 } 
 console.log(reprobados);
 return reprobados;
}

function obtenerpromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += Number(calificaciones[i]);
    }
    return suma / calificaciones.length;
}

async function main() {
let calificaciones = [];
let calificacion=0;
respuesta='1'; 
while (respuesta==='1') {
 calificacion = await ask('¿Qué calificación deseas añadir?: \n'); 
 calificaciones.push(calificacion); 
 respuesta = await ask('¿Deseas añadir otra calificación?: \n1. Si \n2. No \n');  
}
 console.log(calificaciones);
 analizarCalificaciones(calificaciones);
}
main();
function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function obtenerAprobados(numeros) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return { aprobados, reprobados };
}

function analizarCalificaciones(calificaciones) {
  const res = obtenerAprobados(calificaciones);
  let aprobados = res.aprobados;
  let reprobados = res.reprobados;
  let promedio = obtenerPromedio(calificaciones);
  let califAlta = obtenerMayor(calificaciones);
  let califBaja = obtenerMenor(calificaciones);

  return { aprobados, reprobados, promedio, califAlta, califBaja };
}

async function main() {
  const calificaciones = [90, 89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90]
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);

}

main();
