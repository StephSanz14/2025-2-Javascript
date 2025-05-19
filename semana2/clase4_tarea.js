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
