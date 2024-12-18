segundos=100;
segundos2=10;
//contador pantalla1
function actualizarTiempo(){
    document.getElementById("tiempo").innerHTML = segundos;
    document.getElementById("tiempo2").innerHTML = segundos2;
    if(segundos==0){
        window.location.href = 'resultado.html'
    }
    if(segundos2==0){
        guardar_localStorage();
        window.location.href = 'principiante2.html'
    }else{
        segundos--;
        segundos2--;
        setTimeout("actualizarTiempo()",1000);
    }
}
puntos=0;
guardar_localStorage_puntos();
function guardar_localStorage_puntos(){
    puntos
    localStorage.setItem("puntos",puntos);
}
function guardar_localStorage(){
    segundos
    localStorage.setItem("segundos",segundos);
}