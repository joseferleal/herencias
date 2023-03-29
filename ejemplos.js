import{Cliente} from "./cliente.js"
import{cuentaCorriente} from "./cuentaCorriente.js";
import {cuentaAhorro} from "./cuentaAhorro.js";


/* 
const cliente = new Cliente();
cliente.nombreCliente= "Leonardo";
cliente.dniCliente=4234234;
cliente.rutCliente=879797; */
/*Luego de exportar el constructor, podemos escribir así*/
const cliente = new Cliente("Leonardo",789797, 4448);
const cliente2 = new Cliente("María", 7777, 78787878);


///////////////////////////

const cuentaAhorroLeonardo= new cuentaAhorro(1, 1001, cliente, 0);
console.log(cuentaAhorroLeonardo);
const cuentaMaria= new cuentaCorriente(2, 1002, cliente2);
console.log(cuentaMaria);
const cuentaLeonardo= new cuentaCorriente(2, 1001, cliente);
cuentaAhorroLeonardo.depositoEnCuenta(150);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.prueba();
cuentaMaria.prueba();
cuentaAhorroLeonardo.retirarDeCuenta(50);
console.log(cuentaAhorroLeonardo.verSaldo());
console.log(cuentaMaria.verSaldo());

cuentaMaria.depositoEnCuenta(150);
cuentaMaria.retirarDeCuenta(25);
console.log(cuentaMaria.verSaldo());