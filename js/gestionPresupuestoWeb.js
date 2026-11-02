'use strict';

function mostrarDatoEnId(idElemento, valor) {
    document.getElementById(idElemento).textContent = valor;
}

function mostrarGastoWeb(idElemento, gasto) {
    const elemento = document.getElementById(idElemento);
    
    const divGasto = document.createElement('div');
    divGasto.setAttribute('class', 'gasto');
    elemento.append(divGasto);
    
    const divGastoDescripcion = document.createElement('div');
    divGastoDescripcion.setAttribute('class', 'gasto-descripcion');
    divGastoDescripcion.textContent = gasto.descripcion;
    divGasto.append(divGastoDescripcion);

    const divGastoFecha = document.createElement('div');
    divGastoFecha.setAttribute('class', 'gasto-fecha');
    divGastoFecha.textContent = gasto.fecha;
    divGasto.append(divGastoFecha);

    const divGastoValor = document.createElement('div');
    divGastoValor.setAttribute('class', 'gasto-valor');
    divGastoValor.textContent = gasto.valor;
    divGasto.append(divGastoValor);

    const divGastoEtiquetas = document.createElement('div');
    divGastoEtiquetas.setAttribute('class', 'gasto-etiquetas');
    divGasto.append(divGastoEtiquetas);

    for (let etiqueta of gasto.etiquetas)
    {
        const spanGastoEtiquetas = document.createElement('span');
        spanGastoEtiquetas.setAttribute('class', 'gasto-etiquetas-etiqueta');
        spanGastoEtiquetas.textContent = etiqueta + " ";
        divGastoEtiquetas.append(spanGastoEtiquetas);
    }
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    const elemento = document.getElementById(idElemento);

    const divAgrupacion = document.createElement('div');
    divAgrupacion.setAttribute('class', 'agrupacion');
    elemento.append(divAgrupacion);

    const mensaje = "Gastos agrupados por "
    if (periodo === "dia")
    {
        mensaje + "día";
    }
    else if (periodo === "anyo")
    {
        mensaje + "año";
    }
    else
    {
        mensaje + periodo;
    }

    const h1 = document.createElement('h1');
    h1.textContent = mensaje;
    divAgrupacion.append(h1);

    
    const divAgrupacionDato = document.createElement('div');
    divAgrupacionDato.setAttribute('class', 'agrupacion-dato');
    divAgrupacion.append(divAgrupacionDato);


}