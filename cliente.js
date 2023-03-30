export class Cliente{
    nombreCliente; 
    dniCliente; 
    rutCliente;
    #clave;
    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente=nombreCliente;
        this.dniCliente=dniCliente;
        this.rutCliente=rutCliente;
        this.#clave="";
    };
    asignarClave(clave){
        this.#clave=clave;
    };


    autenticable(clave){
        return true;
    };

};   

    /*Ya no se llaman variables, sino atributos o propiedades, por ser parte de una clase */