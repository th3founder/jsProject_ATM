
//Arreglo de usuarios predifinidos

    var usuarios=[
        {nombre: "usuario1", contrasena: "anitalavalatina", saldo: 100, activo: false},
        {nombre: "usuario2", contrasena: "koda", saldo : 2000, activo: false},
        {nombre: "usuario3", contrasena: "oriana", saldo: 300, activo: false}
    ];
    console.log(usuarios);

//Extraer el valor de la caja de usuario

var usuarioText = document.getElementById("usuario-text");


//Extraer el valor de la caja de contraseña

var passwordText = document.getElementById("password-text");



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
                console.log("entre a contrasena");
                console.log(element.contrasena);
                //redireccionamiento a pagina
                location.href = "./interface.html";
                element.activo=true;
                return false;
            }
        }
        console.log("Usuario/Contraseña equivocados");
        return true;

        //console.log(element.nombre);
        
    });    
    
}

// Funcion para cambiar el 'p' dedicados al nombre y al saldo
function AgregarNombreSaldo() {

    
    // Encontrar el 'p' en la pagina relacionado con el nombre y el saldo
    let nombreLayer = document.getElementById('nombreLayer');
    let saldoLayer = document.getElementById('saldoLayer');


    // Cambiar los valores del html del nombre y del saldo    
    nombreLayer.innerHTML = usuarios[2].nombre;
    saldoLayer.innerHTML = usuarios[2].saldo;
    console.log (usuarios[2].saldo);
}

//****Cambiar usuario[] por el usuario que se registro*******

function retiro() {

    let montoInput = document.getElementById('montoInput').value;
    let saldoLayer = document.getElementById('saldoLayer');
    let actualizacionMonto = usuarios[2].saldo - Number(montoInput);
    let saldoLimiteMenor = 10; 

    if (actualizacionMonto>saldoLimiteMenor) {
        console.log(actualizacionMonto);
        usuarios[2].saldo=actualizacionMonto;
        saldoLayer.innerHTML = usuarios[2].saldo;
    }else{

        alert(`Por politica de la empresa su saldo  no puede ser menor a  ${saldoLimiteMenor}`);
    }
    document.getElementById('montoInput').value = '';
    
    
}

function abono(){
    let montoInput = Number(document.getElementById('montoInput').value);
    let saldoLayer = document.getElementById('saldoLayer');
    let actualizacionMonto = usuarios[2].saldo + montoInput;
    let saldoLimiteMayor = 1000; 

    if (actualizacionMonto<saldoLimiteMayor) {
        console.log(actualizacionMonto);
        usuarios[2].saldo=actualizacionMonto;
        saldoLayer.innerHTML = usuarios[2].saldo;
    }else{

        alert(`Por politica de la empresa su saldo  no puede ser mayor a $${saldoLimiteMayor}`);
    }
    document.getElementById('montoInput').value = '';
}

function logout() {
    location.href = "./index.html";
}