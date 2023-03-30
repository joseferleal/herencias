import { Empleado } from "./empleado.js";
export class Director extends Empleado{
    constructor(nombre, dni, salario){
       super(nombre, dni, salario);
    };


    verBono(){
        const bono=10;
        return super._verBono(bono);
     };
};