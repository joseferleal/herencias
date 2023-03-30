import{Cliente} from "./cliente.js"
import{cuentaCorriente} from "./Cuentas/cuentaCorriente.js";
import {cuentaAhorro} from "./Cuentas/cuentaAhorro.js";
import { cuenta } from "./Cuentas/cuenta.js";
import { cuentaNomina } from "./Cuentas/cuentaNomina.js";
import { Empleado } from "./Empleados/empleado.js";
import { Gerente } from "./Empleados/gerente.js";
import { Director } from "./Empleados/director.js";
import { sistemaAutenticacion } from "./sistemaAutenticacion.js";


/* 



//////////////////////////////CREACIÓN DE CLIENTES////////////////////////////
const cliente = new Cliente();
cliente.nombreCliente= "Leonardo";
cliente.dniCliente=4234234;
cliente.rutCliente=879797; */
/*Luego de exportar el constructor, podemos escribir así*/

const cliente = new Cliente("Leonardo",789797, 4448);
const cliente2 = new Cliente("María", 7777, 78787878);


///////////////////////////CREACIÓN DE CUENTAS//////////////////////////

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
console.log(cuentaLeonardo);


//Acá se para la ejecución del programa, porque no se puede instanciar. Es una manera de proteger la clase
/* 
const cuentaSimple= new cuenta(3, 1001, cliente, 500);
console.log(cuentaSimple); 


console.log(cuentaMaria.verSaldo()); */

const cuentaNominaLeonardo= new cuentaNomina(3, 1001, cliente, 500);
console.log(cuentaNominaLeonardo);

cuentaNominaLeonardo.depositoEnCuenta(200);
console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(200);
console.log(cuentaNominaLeonardo.verSaldo());

//////////////////////////////CREACIÓN DE EMPLEADOS/////////////////////////////
const empleado = new Empleado("Juan Gónez", 223232, 1000 );
empleado.asignarClave(12345);


const gerente= new Gerente("Pedro Alonso", 4345345, 2000);
gerente.asignarClave(133345);

const director= new Director("Elena R", 3424242, 3000);
director.asignarClave(152222);

console.log(empleado);
console.log(gerente);
console.log(director);

console.log(empleado.verBono());
console.log(gerente.verBono());
console.log(director.verBono());


console.log(sistemaAutenticacion.login(empleado, 12345));
console.log(sistemaAutenticacion.login(gerente, 133345));
console.log(sistemaAutenticacion.login(director, 152222));


cliente.asignarClave(1111);
console.log("HOLA " + sistemaAutenticacion.login(cliente,11011));