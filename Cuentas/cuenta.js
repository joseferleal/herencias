export class cuenta{
    #cliente;
    #saldo; 
    constructor(numero, agencia, cliente, saldo){

        if(this.constructor==cuenta){

            throw new Error("No se deben instanciar objetos de la clase cuenta");
        };
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
      /*  this._retirarDeCuenta(valor, 0); */
      
        throw new Error("Debe implementar el método retirarDeCuenta en su clase");
            
    };

    _retirarDeCuenta(valor, comision){
        if(this.tipo=="Corriente"){valor=valor*(1+(comision/100));}else if(this.tipo="Ahorros"){valor=valor*(1+(comision/100))};
        if(valor<=this.#saldo){this.#saldo-=valor; return this.#saldo;
        }else{console.log("No es posible dicho retiro"); return this.#saldo;};
        
    };



    prueba(){console.log("Método padre")};
};