//Arreglo de usuarios predifinidos
var usuarios=[
    {nombre: "usuario1", contrasena: "anitalavalatina"},
    {nombre: "usuario2", contrasena: "koda"},
    {nombre: "usuario3", contrasena: "oriana"}
];

console.log(usuarios);

//Extraer el valor de la caja de usuario
// cambiar String por el get element id
var usuarioText = "usuario2"//document.getElementById("").value;

//Extraer el valor de la caja de contraseña
// cambiar String por el get element id
var passwordText = "Koda" //document.getElementById("").value;



//funcion para la validacion de usuario y contraseña
function validacionUsuario() {

    //valiacion de usuarios
    //Se uso every para parar el ciclo en el momento que el usuario y contraseña sean los mismos que 
    //los establecidos en el array
    usuarios.every(element => {

        //validacion de usuario
        if(usuarioText===element.nombre){
            
            console.log(`encontre este usuario : ${usuarioText}`);

            //validacion de contrasena
            if(passwordText===element.contrasena){
                console.log("entre a contrasena");
                console.log(element.contrasena);
                //redireccionamiento a pagina
                location.href = "./pagina2.html";
                return false;
            }
        }
        console.log("Usuario/Contraseña equivocados");
        return true;

        //console.log(element.nombre);
        
    });    
    
}