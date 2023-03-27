import{Cliente} from "./cliente.js"
import{cuentaCorriente} from "./cuentaCorriente.js";
import { cuentaAhorro } from "./cuentaAhorro.js";


/* 
const cliente = new Cliente();
cliente.nombreCliente= "Leonardo";
cliente.dniCliente=4234234;
cliente.rutCliente=879797; */
/*Luego de exportar el constructor, podemos escribir así*/
const cliente = new Cliente("Leonardo",789797, 4448);
const cliente2 = new Cliente("María", 7777, 78787878);
/* cliente2.nombreCliente= "Maria";
cliente2.dniCliente=4266664;
cliente2.rutCliente=434437;
 */

const cuentaLeonardo= new cuentaCorriente(cliente, 1, 1001);
/* cuentaLeonardo.numero=1;
cuentaLeonardo.agencia=1001;
cuentaLeonardo.setCliente=cliente;
 */
const cuentaMaria= new cuentaCorriente(cliente2, 2, 1002);
/* cuentaMaria.numero=2;
cuentaMaria.agencia=1002;
cuentaMaria.setCliente=cliente2; */


console.log(cuentaLeonardo);
let saldo=cuentaLeonardo.verSaldo();
console.log("el saldo actual es " + saldo);
/* cuentaLeonardo.saldo=0; ya no lo necesito, porque tengo un constructor */
cuentaLeonardo.depositoEnCuenta(150);
saldo=cuentaLeonardo.verSaldo(); ///Se puede así
console.log("el saldo actual es " + saldo);
saldo=cuentaLeonardo.retirarDeCuenta(70);
console.log("el saldo actual es " + saldo);
saldo=cuentaLeonardo.retirarDeCuenta(70);
console.log("el saldo actual es " + saldo);
saldo=cuentaLeonardo.depositoEnCuenta(90);
console.log("el saldo actual es " + saldo);

///Instancia del cliente María
cuentaLeonardo.transferirParaCuenta(100, cuentaMaria)
const saldoMaria=cuentaMaria.verSaldo();
console.log("el saldo actual de María es  " + saldoMaria);
const saldoLeonardo=cuentaLeonardo.verSaldo();
console.log("el saldo actual de Leonardo es " + saldoLeonardo);
console.log(cuentaMaria);
console.log(cuentaMaria.cliente);

//Conteo del total de cuentas en todo el banco
console.log(cuentaCorriente.cantidadCuentas);
new cuentaCorriente(cliente, 22, 1001);
console.log(cuentaCorriente.cantidadCuentas);



////////////////////////////Cuenta de ahorros

const cuentaAhorroLeonardo= new cuentaAhorro(cliente, 1001);
console.log(cuentaAhorroLeonardo);