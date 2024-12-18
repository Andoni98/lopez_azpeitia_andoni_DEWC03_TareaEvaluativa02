segundos=localStorage.getItem("segundos");
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
        puntos=localStorage.getItem("puntos");
        if(puntos==1){
            window.location.href = 'principiante4.html'
        }
        if(puntos==2){
            window.location.href = 'principiante6.html'
        }
        if(puntos==3){
            window.location.href = 'principiante8.html'
        }
        if(puntos==4){
            window.location.href = 'principiante10.html'
        }
        if(puntos==5){
            window.location.href = 'principiante12.html'
        }
    }else{
        segundos--;
        segundos2--;
        setTimeout("actualizarTiempo()",1000);
    }
}
function guardar_localStorage(){
    segundos
    localStorage.setItem("segundos",segundos);
}