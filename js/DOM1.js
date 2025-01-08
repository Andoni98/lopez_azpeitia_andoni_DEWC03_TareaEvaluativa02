const principiante = document.getElementById('principiante');
const intermedio = document.getElementById('intermedio');
const avanzado = document.getElementById('avanzado');
principiante.addEventListener('click', function(){
        window.location.href = 'principiante.html';
})
intermedio.addEventListener('click', function(){
        window.location.href = 'intermedio.html';
})
avanzado.addEventListener('click', function(){
        window.location.href = 'avanzado.html';
})
