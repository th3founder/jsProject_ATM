//Arreglo de usuarios predifinidos
var usuarios=[
    {nombre: "usuario1", contrasena: "anitalavalatina", saldo: 100},
    {nombre: "usuario2", contrasena: "koda", saldo : 2000},
    {nombre: "usuario3", contrasena: "oriana", saldo: 33}
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
                return false;
            }
        }
        console.log("Usuario/Contraseña equivocados");
        return true;

        //console.log(element.nombre);
        
    });    
    
}

function retiro() {
    
}

function abono(){

}

function logout() {
    location.href = "./index.html";
}