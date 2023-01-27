window.addEventListener("load", mostrarTabla)

let botonTabla = document.getElementById("tabla-nav")
botonTabla.addEventListener("click", mostrarTabla)

let botonTablaDom = document.getElementById("tabla-dom-nav")
botonTablaDom.addEventListener("click", mostrarTablaDom)

let botonFiguras = document.getElementById("figuras-nav")
botonFiguras.addEventListener("click", mostrarFiguras)

function ocultarTabla(){
    let seccionTabla = document.getElementById("tabla")
    seccionTabla.style.display="none"
}

function mostrarTabla(){
    let seccionTabla = document.getElementById("tabla")
    seccionTabla.style.display="block"
    ocultarTablaDom()
    ocultarFiguras()
}

function ocultarTablaDom(){
    let seccionTablaDom = document.getElementById("tabla-dom")
    seccionTablaDom.style.display="none"
}

function mostrarTablaDom(){
    let seccionTablaDom = document.getElementById("tabla-dom")
    seccionTablaDom.style.display="block"
    ocultarTabla()
    ocultarFiguras()
}

function ocultarFiguras(){
    let seccionFiguras = document.getElementById("figuras")
    seccionFiguras.style.display="none"
}

function mostrarFiguras(){
    let seccionFiguras = document.getElementById("figuras")
    seccionFiguras.style.display="block"
    ocultarTabla()
    ocultarTablaDom()
}