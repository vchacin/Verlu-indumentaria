/* let animados = document.querySelectorAll(".animado");

function mostrarScroll () {
    let scrollTop = document.documentElement.scrollTop();
    for (var i = 0; i < animados.lenght; i++){
        let alturaAnimado = animados[i].offsetTop;
        if(alturaAnimado < scrollTop){
            animados[i].style.opacity = 1;
            animados[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll); */


$(document).ready(function () {

$(window).lazyScript({

selectorClass:'lazy',

callback: jQuery.noop,

threshold: 0,

scrollInterval: 500

});

});
