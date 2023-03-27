export class cuenta{

    #cliente;
    #saldo; 
    constructor(tipo, numero, agencia, cliente, saldo){
       this.tipo=tipo;
       this.numero=numero;
       this.agencia=agencia;
       this.#cliente=cliente;
       this.#saldo=saldo;
       
    };


    depositoEnCuenta(valor){
        /* this.saldo=this.saldo+valor; */
        if(valor>0){this.#saldo+=valor; return this.#saldo;}else{console.log("No es posible dicho depósito"); return this.#saldo;};
        
    };

    retirarDeCuenta(valor){
        if(this.tipo=="Corriente"){valor=valor*1.05;}else if(this.tipo="Ahorros"){valor=valor*1.02};
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