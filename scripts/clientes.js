class clientes{
    constructor(nombre,contrasena,saldo){
        this.nombre=nombre;
        this.contrasena=contrasena;
        this.saldo=saldo;
        this.activo=false;
    }
    getNombre(){
        return this.nombre;
    }
    getSaldo(){
        return this.saldo;
    }
    getActivo(){
        return this.activo;
    }
    SumaSaldo(suma){
        this.saldo=this.saldo + suma;
        return this.saldo;
    }
    restaSaldo(resta){
        this.saldo=this.saldo-resta;
        return this.saldo;
    }
    
}

var cliente1 = new clientes('usuario1','u1',100);
var cliente2 = new clientes('usuario2','u2',200);
var cliente3 = new clientes('usuario3','u3',300);