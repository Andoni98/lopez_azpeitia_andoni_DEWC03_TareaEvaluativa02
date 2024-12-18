// ------------------------------ 1. VARIABLES GLOBALES ------------------------------
let usuariosJSON = null;
let usuariosJSONpath = 'json\\usuarios.json';

// ------------------------------ 2. CARGA INICIAL DE DATOS (NO TOCAR!) ------------------------------
// Esto inicializa los eventos del formulario y carga los datos iniciales
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar los JSON cuando la página se carga, antes de cualquier interacción del usuario
    await cargarDatosIniciales();

    // mostrar datos en consola
    console.log('Usuarios JSON: ', usuariosJSON);

    //Guadar los datos en localstorage
    guardar_localStorage(usuariosJSON);

    // Inicializar eventos el formularios
    document.getElementById('container').addEventListener('submit', comprobarUsuario);
    
});

function resetForm(){
    document.getElementById("container").reset();
}
// Función para cargar ambos ficheros JSON al cargar la página
async function cargarDatosIniciales() {

    try {
        // Esperar a que ambos ficheros se carguen
        usuariosJSON = await cargarJSON(usuariosJSONpath);

    } catch (error) {
        console.error('Error al cargar los ficheros JSON:', error);
    }
}
// Función para cargar un JSON desde una ruta específica
async function cargarJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${path}`);
    }
    return await response.json();
}
// Guargar los datos json en localstorage
function guardar_localStorage(usuariosJSON){
    let usuarios = [];
    let contraseñas = [];
    var recorrer=0;
    while(recorrer<=2){
        usuarios[recorrer] = usuariosJSON[recorrer].usuario;
        contraseñas[recorrer] = usuariosJSON[recorrer].contraseña;
        recorrer = recorrer+1;
    }
    localStorage.setItem("usuario1",usuarios[0]);
    localStorage.setItem("usuario2",usuarios[1]);
    localStorage.setItem("usuario3",usuarios[2]);
    localStorage.setItem("contraseña1",contraseñas[0]);
    localStorage.setItem("contraseña2",contraseñas[1]);
    localStorage.setItem("contraseña3",contraseñas[2]);
}

// comprobar usuario y contraseña
function comprobarUsuario(event) {   
    event.preventDefault();
    // Obtener los datos del formulario
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    validarContraseña(contraseña);
    // Devolver datos localstorage
    let usuarios = [];
    let contraseñas = [];
    usuarios[0] = localStorage.getItem("usuario1");
    contraseñas[0] = localStorage.getItem("contraseña1");
    usuarios[1] = localStorage.getItem("usuario2");
    contraseñas[1] = localStorage.getItem("contraseña2");
    usuarios[2] = localStorage.getItem("usuario3");
    contraseñas[2] = localStorage.getItem("contraseña3");
    var recorrer = 0;
    while(recorrer<=2){
        if(usuario==usuarios[recorrer]&&contraseña==contraseñas[recorrer]){
            window.location.href="bienvenida.html"
        }
        recorrer = recorrer+1;
    }
    resetForm();
}
 
//validar contraseña
function validarContraseña(contraseña){
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if(regExp.test(contraseña)){
        //cambiar mensaje
        var p = document.getElementById("mensaje");
        p.innerText = ""
    }else{
        //cambiar mensaje
        var p = document.getElementById("mensaje");
        p.innerText = "La contraseña no es válida"
    }
}