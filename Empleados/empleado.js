export class Empleado{
    #nombre;
    #dni;
    #salario;
    constructor(nombre, dni, salario){
        this.#nombre=nombre;
        this.#dni=dni;
        this.#salario=salario;
    };
    verBono(){
        return this.#salario;
     };


    _verBono(bono){
       return this.#salario+ this.#salario*(bono/100); 
    };
};