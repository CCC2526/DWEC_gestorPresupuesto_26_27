import * as gp from './gestionPresupuesto.js'
import * as gpWeb from './gestionPresupuestoWeb.js'

gp.actualizarPresupuesto(1500)

gpWeb.mostrarDatoEnId('presupuesto', gp.mostrarPresupuesto())

let gasto1 = gp.CrearGasto("Compra carne", 23.44, "2021-10-06");
gasto1.anyadirEtiquetas("casa", "comida");
let gasto2 = gp.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06");
gasto2.anyadirEtiquetas("supermercado", "comida")
let gasto3 = gp.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = gp.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = gp.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = gp.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

gp.anyadirGasto(gasto1);
gp.anyadirGasto(gasto2);
gp.anyadirGasto(gasto3);
gp.anyadirGasto(gasto4);
gp.anyadirGasto(gasto5);
gp.anyadirGasto(gasto6);

gpWeb.mostrarDatoEnId('gastos-totales', gp.calcularTotalGastos())