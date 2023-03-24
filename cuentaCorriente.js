export class cuentaCorriente{
    
    cliente;
    numero; 
    #saldo; 
    agencia;
    
    constructor(){ //Valores o procedimientos por defecto
        this.cliente=null;
        this.#saldo=0;
        this.numero="#####";
        this.agencia=" ";
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
