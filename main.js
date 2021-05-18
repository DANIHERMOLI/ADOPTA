alert("¿Esta seguro de querer avanzar?")
letubicacionPrincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function(){
    letdesplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual;
})

