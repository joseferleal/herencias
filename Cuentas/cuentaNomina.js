import { cuenta } from "./cuenta.js";
export class cuentaNomina extends cuenta {
           constructor(numero, agencia, cliente, saldo){
            super(numero, agencia, cliente, saldo);
        
           
        };

        
    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor, 1);}
    

};