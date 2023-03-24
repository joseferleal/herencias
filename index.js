//Las clases son moldes

/* {nombreCliente; dniCliente; numeroCuenta; saldoCuenta} */



//Forma "manual"
/* const nombreCliente="Leonardo";
const dniCliente=138464;
const numeroCuenta=64556464;
const saldoCuenta=1000;
console.log(nombreCliente);

*/




class Cliente{nombreCliente; dniCliente; rutCliente};//Ya no se llaman variables, sino atributos o propiedades, por ser parte de una clase
class cuentaCorriente{numero; saldo; agencia;
    depositoEnCuenta(valor){
        /* this.saldo=this.saldo+valor; */
        this.saldo+=valor;
    }
};


const cliente1= new Cliente();

cliente1.nombreCliente="José";
cliente1.dniCliente=465464;
cliente1.rutCliente=77878;

const cuentaCorriente1=new cuentaCorriente();
cuentaCorriente1.numero=4844777;
cuentaCorriente1.saldo=464888;
cuentaCorriente1.agencia=1001;


const cliente2= new Cliente();
cliente2.nombreCliente="Lucía";
cliente2.dniCliente=77775464;
cliente2.rutCliente=77;


const cuentaCorriente2=new cuentaCorriente();
cuentaCorriente2.numero=4898797977;
cuentaCorriente2.saldo=4888;
cuentaCorriente2.agencia=1002;


/* const cliente3= new Cliente();
cliente3.nombreCliente="Antonio";
cliente3.dniCliente=744;

const cuentaCorriente3=new cuentaCorriente();
cuentaCorriente3.numero=487;
cuentaCorriente3.saldo=255558; 

console.log(cliente3);
console.log(cuentaCorriente3);

*/



console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);

//Suma de saldo sin un método
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.saldo=cuentaCorriente2.saldo+100;
console.log(cuentaCorriente2.saldo); 


///Con un método

cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(400);
console.log(cuentaCorriente2.saldo);