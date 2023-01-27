let inputNombre = document.getElementById("iname")
let inputApellido = document.getElementById("ilast-name")
let inputSemestre = document.getElementById("isem")
let outputError = document.getElementById("error-tabla-dom")

function añadirInformacionTabla(){

    let tabla = document.getElementById("tabla-dom-tabla")
    let formulario = document.getElementById("formulario-tabla-dom")

    let nuevaPersona = document.createElement("tr")
    let nombre = document.createElement("td")
    let apellido = document.createElement("td")
    let semestre = document.createElement("td")

    nombre.innerHTML = inputNombre.value
    apellido.innerHTML = inputApellido.value
    semestre.innerHTML = inputSemestre.value

    tabla.appendChild(nuevaPersona)
    nuevaPersona.appendChild(nombre)
    nuevaPersona.appendChild(apellido)
    nuevaPersona.appendChild(semestre)

    formulario.reset()    
}

function verificarInformacion(evt){

    evt.preventDefault()

    let messageError = " "

    if (inputSemestre.value<=0 || inputSemestre.value>10){
        messageError = "Ingrese un semestre valido"
    }else{
        añadirInformacionTabla()
    }

    outputError.innerHTML = messageError
}

let form = document.getElementById("formulario-tabla-dom")
form.addEventListener("submit", verificarInformacion)