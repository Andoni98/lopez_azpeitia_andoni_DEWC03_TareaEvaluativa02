puntos=localStorage.getItem("puntos");
document.getElementById("puntos").innerHTML = puntos;
var colorResultado = document.querySelector("#resultado")
if(puntos>=5){
    resultado="victoria";
    colorResultado.style.background="green"
}else{
    resultado="derrota";
    colorResultado.style.background="red"
}
document.querySelector("#resultado").innerHTML = resultado;
const volver = document.getElementById('volver');
const cerrar = document.getElementById('cerrar');
volver.addEventListener('click', function(){
    window.location.href = 'bienvenida.html';
})
cerrar.addEventListener('click', function(){
    window.location.href = 'index.html';
})