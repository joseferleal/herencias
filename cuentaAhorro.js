import {cuenta} from "./cuenta.js";

export class cuentaAhorro extends cuenta{
    constructor(numero, agencia, cliente, saldo){
        super(numero, agencia, cliente, saldo);
    
       
    };


    retirarDeCuenta(valor){
       super.retirarDeCuenta(valor, 2);}

};