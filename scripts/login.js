
//Arreglo de usuarios predifinidos

    var usuarios=[
        {nombre: "usuario1", contrasena: "anitalavalatina", saldo: 100},
        {nombre: "usuario2", contrasena: "koda", saldo : 250},
        {nombre: "usuario3", contrasena: "oriana", saldo: 300}
    ];
    //console.log(usuarios);

//Extraer el valor de la caja de usuario
var usuarioText = document.getElementById("usuario-text");


//Extraer el valor de la caja de contraseña
var passwordText = document.getElementById("password-text");

//Extraer el valor de las cajas con los ids
var login = document.getElementById('loginMain');
var interface = document.getElementById('interfaceMain');


//funcion para la validacion de usuario y contraseña
function validacionUsuario() {
    
    //valiacion de usuarios
    //Se uso every para parar el ciclo en el momento que el usuario y contraseña sean los mismos que 
    //los establecidos en el array
    usuarios.every(element => {
        
        //validacion de usuario
        if(usuarioText.value===element.nombre){
            
            console.log(`encontre este usuario : ${usuarioText}`);

            //validacion de contrasena
            if(passwordText.value===element.contrasena){
               //console.log("entre a contrasena");
               //console.log(element.contrasena);
                
                //redireccionamiento a pagina
                login.style.display = 'none';
                interface.style.display = 'flex';
                AgregarNombreSaldo();
                return false;
                
            }
        }else{
        console.log("Usuario/Contraseña equivocados");
        return true;
        }
        //console.log(element.nombre);
        
    });    
    
}

function AgregarNombreSaldo() {

    
    // Encontrar el 'p' en la pagina relacionado con el nombre y el saldo
    let nombreLayer = document.getElementById('nombreLayer');
    let saldoLayer = document.getElementById('saldoLayer');
    let saldoUsuario;
    usuarios.forEach(element => {
        if (usuarioText.value === element.nombre) {
            saldoUsuario = element.saldo;
        }
    });

    // Cambiar los valores del html del nombre y del saldo    
    nombreLayer.innerHTML = usuarioText.value;
    saldoLayer.innerHTML = saldoUsuario;
    
}


function retiro() {

    let montoInput = document.getElementById('montoInput').value;
    let saldoLayer = document.getElementById('saldoLayer');
    let saldoLimiteMenor = 10; 
    let actualizacionMonto; 

    usuarios.every(element => {
        if (usuarioText.value === element.nombre) {
            actualizacionMonto = element.saldo - Number(montoInput);
            
            if (actualizacionMonto>saldoLimiteMenor) {
                //console.log(actualizacionMonto);
                    element.saldo = actualizacionMonto;
                    saldoLayer.innerHTML = element.saldo;       
            }else{
        
                alert(`Por politica de la empresa su saldo  no puede ser menor a $${saldoLimiteMenor}`);
            }
            return false;
            
        }
        return true;
    });
    document.getElementById('montoInput').value = '';
    
    
}

function abono(){
    let montoInput = Number(document.getElementById('montoInput').value);
    let saldoLayer = document.getElementById('saldoLayer');
    let saldoLimiteMayor = 1000;
    let actualizacionMonto; 
    usuarios.every(element => {
        if (usuarioText.value === element.nombre) {
            actualizacionMonto = element.saldo + Number(montoInput);
            if (actualizacionMonto<saldoLimiteMayor) {
                console.log(actualizacionMonto);
                    element.saldo = actualizacionMonto;
                    saldoLayer.innerHTML = element.saldo;       
            }else{
        
                alert(`Por politica de la empresa su saldo  no puede ser mayor a $${saldoLimiteMayor}`);
            }
            return false;
            
        }
        return true;
    });
    
    document.getElementById('montoInput').value = '';
}

function logout() {
    interface.style.display = 'none';
    login.style.display = 'flex';
    document.getElementById("password-text").value = '';
    document.getElementById("usuario-text").value = '';
}

