//contador puntos
puntos=localStorage.getItem("puntos");
document.getElementById("puntos").innerHTML = "Puntos: "+puntos;
//contador pantalla2
segundos=localStorage.getItem("segundos");
function actualizarTiempo2(){
    document.getElementById("tiempo").innerHTML = segundos;
    if(segundos==0){
        window.location.href = 'resultado.html'
    }else{
        segundos--;
        setTimeout("actualizarTiempo2()",1000);
    }
}
const btnrojo = document.getElementById('btnrojo');
const btnverde = document.getElementById('btnverde');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
btnrojo.addEventListener('click', function(){
    btn1.addEventListener('click', function(){
        btn1.style.backgroundColor = 'red';
    })
    btn2.addEventListener('click', function(){
        btn2.style.backgroundColor = 'red';
    })
    btn3.addEventListener('click', function(){
        btn3.style.backgroundColor = 'red';
    })
    btn4.addEventListener('click', function(){
        btn4.style.backgroundColor = 'red';
    })
    btn5.addEventListener('click', function(){
        btn5.style.backgroundColor = 'red';
    })
    btn6.addEventListener('click', function(){
        btn6.style.backgroundColor = 'red';
    })
    btn7.addEventListener('click', function(){
        btn7.style.backgroundColor = 'red';
    })
    btn8.addEventListener('click', function(){
        btn8.style.backgroundColor = 'red';
    })
    btn9.addEventListener('click', function(){
        btn9.style.backgroundColor = 'red';
    })
    btn10.addEventListener('click', function(){
        btn10.style.backgroundColor = 'red';
    })
})
btnverde.addEventListener('click', function(){
    btn1.addEventListener('click', function(){
        btn1.style.backgroundColor = 'green';
    })
    btn2.addEventListener('click', function(){
        btn2.style.backgroundColor = 'green';
    })
    btn3.addEventListener('click', function(){
        btn3.style.backgroundColor = 'green';
    })
    btn4.addEventListener('click', function(){
        btn4.style.backgroundColor = 'green';
    })
    btn5.addEventListener('click', function(){
        btn5.style.backgroundColor = 'green';
    })
    btn6.addEventListener('click', function(){
        btn6.style.backgroundColor = 'green';
    })
    btn7.addEventListener('click', function(){
        btn7.style.backgroundColor = 'green';
    })
    btn8.addEventListener('click', function(){
        btn8.style.backgroundColor = 'green';
    })
    btn9.addEventListener('click', function(){
        btn9.style.backgroundColor = 'green';
    })
    btn10.addEventListener('click', function(){
        btn10.style.backgroundColor = 'green';
    })
})
//verificar si es correcta la solucion
function verificar(){
    if(btn9.style.backgroundColor == 'green'&&btn10.style.backgroundColor == 'red'&&btn8.style.backgroundColor == 'red'&&btn5.style.backgroundColor == 'red'&&btn7.style.backgroundColor == 'red'&&btn6.style.backgroundColor == 'red'&&btn4.style.backgroundColor == 'red'&&btn3.style.backgroundColor == 'red'&&btn2.style.backgroundColor == 'red'&&btn1.style.backgroundColor == 'red'){
        guardar_localStorage();
        window,location.href='avanzado3.html'
        puntos= 1;
        guardar_localStorage_puntos();
    }
}
function verificar2(){
    if(btn2.style.backgroundColor == 'green'&&btn10.style.backgroundColor == 'red'&&btn8.style.backgroundColor == 'red'&&btn5.style.backgroundColor == 'red'&&btn7.style.backgroundColor == 'red'&&btn6.style.backgroundColor == 'red'&&btn4.style.backgroundColor == 'red'&&btn3.style.backgroundColor == 'red'&&btn9.style.backgroundColor == 'red'&&btn1.style.backgroundColor == 'red'){
        guardar_localStorage();
        window,location.href='avanzado5.html'
        puntos= 2;
        guardar_localStorage_puntos();
    }
}
function verificar3(){
    if(btn7.style.backgroundColor == 'green'&&btn10.style.backgroundColor == 'red'&&btn8.style.backgroundColor == 'red'&&btn5.style.backgroundColor == 'red'&&btn2.style.backgroundColor == 'red'&&btn6.style.backgroundColor == 'red'&&btn4.style.backgroundColor == 'red'&&btn3.style.backgroundColor == 'red'&&btn9.style.backgroundColor == 'red'&&btn1.style.backgroundColor == 'red'){
        guardar_localStorage();
        window,location.href='avanzado7.html'
        puntos= 3;
        guardar_localStorage_puntos();
    }
}
function verificar4(){
    if(btn6.style.backgroundColor == 'green'&&btn10.style.backgroundColor == 'red'&&btn8.style.backgroundColor == 'red'&&btn5.style.backgroundColor == 'red'&&btn2.style.backgroundColor == 'red'&&btn7.style.backgroundColor == 'red'&&btn4.style.backgroundColor == 'red'&&btn3.style.backgroundColor == 'red'&&btn9.style.backgroundColor == 'red'&&btn1.style.backgroundColor == 'red'){
        guardar_localStorage();
        window,location.href='avanzado9.html'
        puntos= 4;
        guardar_localStorage_puntos();
    }
}
function verificar5(){
    if(btn6.style.backgroundColor == 'green'&&btn10.style.backgroundColor == 'red'&&btn8.style.backgroundColor == 'red'&&btn5.style.backgroundColor == 'red'&&btn2.style.backgroundColor == 'red'&&btn7.style.backgroundColor == 'red'&&btn4.style.backgroundColor == 'red'&&btn3.style.backgroundColor == 'red'&&btn9.style.backgroundColor == 'red'&&btn1.style.backgroundColor == 'red'){
        guardar_localStorage();
        window,location.href='avanzado11.html'
        puntos= 5;
        guardar_localStorage_puntos();
    }
}
function verificar6(){
    if(btn7.style.backgroundColor == 'green'&&btn10.style.backgroundColor == 'red'&&btn8.style.backgroundColor == 'red'&&btn5.style.backgroundColor == 'red'&&btn2.style.backgroundColor == 'red'&&btn6.style.backgroundColor == 'red'&&btn4.style.backgroundColor == 'red'&&btn3.style.backgroundColor == 'red'&&btn9.style.backgroundColor == 'red'&&btn1.style.backgroundColor == 'red'){
        guardar_localStorage();
        window,location.href='resultado.html'
        puntos= 6;
        guardar_localStorage_puntos();
    }
}
function guardar_localStorage(){
    segundos
    localStorage.setItem("segundos",segundos);
}
function guardar_localStorage_puntos(){
    puntos
    localStorage.setItem("puntos",puntos);
}
