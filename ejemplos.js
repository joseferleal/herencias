import{Cliente} from "./cliente.js"
import{cuentaCorriente} from "./cuentaCorriente.js";



const cliente = new Cliente();
cliente.nombreCliente= "Leonardo";
cliente.dniCliente=4234234;
cliente.rutCliente=879797;


const cuentaLeonardo= new cuentaCorriente();
cuentaLeonardo.numero=1;
cuentaLeonardo.agencia=1001;
cuentaLeonardo.cliente=cliente;


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

const cliente2 = new Cliente();
cliente2.nombreCliente= "Maria";
cliente2.dniCliente=4266664;
cliente2.rutCliente=434437;



const cuentaMaria= new cuentaCorriente();
cuentaMaria.numero=2;
cuentaMaria.agencia=1002;
cuentaMaria.cliente=cliente2;


cuentaLeonardo.transferirParaCuenta(100, cuentaMaria)

const saldoMaria=cuentaMaria.verSaldo();

console.log("el saldo actual de María es  " + saldoMaria);

const saldoLeonardo=cuentaLeonardo.verSaldo();
console.log("el saldo actual de Leonardo es " + saldoLeonardo);

console.log(cuentaMaria);