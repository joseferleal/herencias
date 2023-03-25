
import {Cliente} from "./cliente.js";
export class cuentaCorriente{
    
    #cliente;
    numero; 
    #saldo; 
    agencia;
    static cantidadCuentas =0; //Con la palabra static definimos que este atributo es común para todas las cuentas


    set cliente(valor){

        if(valor instanceof Cliente){
            this.#cliente=valor;
        }
        
    }

    get cliente(){
        return this.#cliente;
    }
    
    constructor(cliente, numero, agencia){ //Un constructor son valores o procedimientos por defecto. El saldo lo recibo en cero
        this.cliente=cliente;
        /* this.#cliente=null; */
        this.#saldo=0;
        this.numero=numero;
        this.agencia=agencia;
        cuentaCorriente.cantidadCuentas++; ///El total de cuentas que hay
    };
    
    
    depositoEnCuenta(valor){
        /* this.saldo=this.saldo+valor; */
        if(valor>0){this.#saldo+=valor; return this.#saldo;}else{console.log("No es posible dicho depósito"); return this.#saldo;};
        
    };

    retirarDeCuenta(valor){

        if(valor<=this.#saldo){this.#saldo-=valor; return this.#saldo;
        }else{console.log("No es posible dicho retiro"); return this.#saldo;};
        
    };


    verSaldo(){
        return this.#saldo;
    };


    transferirParaCuenta(valor, cuentaDestino){
        if(valor<=this.#saldo){
            this.retirarDeCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor);
        }
        else{console.log("No es posible dicha transferencia. Fondos insuficientes")};
        

    }
};
