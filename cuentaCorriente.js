
import {Cliente} from "./cliente.js";
import {cuenta} from "./cuenta.js";
export class cuentaCorriente extends cuenta{
    
    static cantidadCuentas =0; //Con la palabra static definimos que este atributo es común para todas las cuentas
    constructor(numero, agencia, cliente){ //Un constructor son valores o procedimientos por defecto. 

        super(numero, agencia, cliente, 0);
        /*La palabra reservada super permite llamar los atributos del padre*/
        cuentaCorriente.cantidadCuentas++; ///El total de cuentas que hay
    };
    retirarDeCuenta(valor){
      super._retirarDeCuenta(valor, 5);
      
  };
    prueba(){
        super.prueba();
        console.log("Método hijo");
    };
   
};
