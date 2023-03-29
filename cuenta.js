export class cuenta{
    #cliente;
    #saldo; 
    constructor(numero, agencia, cliente, saldo){
       /* this.tipo=tipo; */
       this.numero=numero;
       this.agencia=agencia;
       this.#cliente=cliente;
       this.#saldo=saldo;
    };
    set cliente(valor){

        if(valor instanceof Cliente){
            this.#cliente=valor;
        }
        
    }

    get cliente(){
        return this.#cliente;
    }
    
    depositoEnCuenta(valor){
        /* this.saldo=this.saldo+valor; */
        if(valor>0){this.#saldo+=valor; return this.#saldo;}else{console.log("No es posible dicho depósito"); return this.#saldo;};
      
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
    };

    
    retirarDeCuenta(valor){
       _retirarDeCuenta(valor, 0);
        
    };

    _retirarDeCuenta(valor, comision){
        if(this.tipo=="Corriente"){valor=valor*(1+(comision/100));}else if(this.tipo="Ahorros"){valor=valor*(1+(comision/100))};
        if(valor<=this.#saldo){this.#saldo-=valor; return this.#saldo;
        }else{console.log("No es posible dicho retiro"); return this.#saldo;};
        
    };



    prueba(){console.log("Método padre")};
};