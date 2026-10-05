'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let idGasto = 0;
let gastos = [];

function actualizarPresupuesto(valor) {
    // TODO
    if (typeof valor === "number" && valor >= 0)
    {
        presupuesto = valor;
    }
    else
    {
        console.log("Error: el presupuesto debe ser un número no negativo.");
        valor = -1;
    }
    return valor;
}

function mostrarPresupuesto() {
    // TODO
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // TODO
    this.descripcion = String(descripcion);

    if (typeof valor === "number" && valor >= 0) {
        this.valor = valor;
    } else {
        this.valor = 0;
    }

    if (fecha == undefined || isNaN(fecha) == true)
    {
        this.fecha = Date.now();
    }
    else
    {
        this.fecha = Date.parse(fecha);
    }
    
    this.etiquetas = [];

    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${descripcion} con valor ${valor} €`
    }

    this.actualizarDescripcion = function(nuevaDescripcion){
        this.descripcion = String(nuevaDescripcion);
    } 

    this.actualizarValor = function(nuevoValor){
        if (typeof nuevoValor === "number" && nuevoValor >= 0) {
            this.valor = nuevoValor;
        }
    }

    this.actualizarFecha = function(nuevaFecha){
        if (nuevaFecha !== undefined || isNaN(nuevaFecha) == false)
        {
            this.fecha = nuevaFecha;
        }
    }

    this.anyadirEtiquetas = function(...nuevasEtiquetas) {
    for (let etiqueta of nuevasEtiquetas) {
        if (!this.etiquetas.includes(etiqueta)) {
            this.etiquetas.push(etiqueta);
            }
        }
    }

    this.anyadirEtiquetas(...etiquetas);

    this.borrarEtiquetas = function(...etiquetas)
    {
        this.etiquetas = this.etiquetas.filter(
        etiqueta => !etiquetasBorrar.includes(etiqueta)
        )
    }
}

function listarGastos(){
    return gastos;
}

function anyadirGasto(gasto){
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto(id){
    let posicion = gastos.findIndex(gasto => gasto.id === id);

    if (posicion != -1) {
        gastos.splice(posicion, 1);
    }
}

function calcularTotalGastos(){
    let suma = 0;

    for (let gasto of gastos) {
        suma += gasto.valor;
    }

    return suma;
}

function calcularBalance(){
    let totalGastos = calcularTotalGastos();

    return presupuesto - totalGastos;
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
