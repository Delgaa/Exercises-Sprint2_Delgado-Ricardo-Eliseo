// Punto 1
const $botoncolor = document.getElementById("changeColor")
const $divColor = document.getElementById("bgColor")

$botoncolor.addEventListener("click", changeBgColor)
function changeBgColor() {
    const colores = ["blue", "red"]
    console.log([$divColor])
    if ($divColor.classList.contains("bg-slate-500")) {
        $divColor.classList.replace('bg-slate-500', `bg-${colores[0]}-400`)
        $divColor.innerHTML = `<h2 class = "text-2xl">${colores[0]}</h2>`
        return
    }
    if ($divColor.classList.contains(`bg-${colores[0]}-400`)) {
        $divColor.classList.replace(`bg-${colores[0]}-400`, `bg-${colores[1]}-400`)
        $divColor.innerHTML = `<h2 class = "text-2xl">${colores[1]}</h2>`
        return
    }
    $divColor.classList.replace(`bg-${colores[1]}-400`, 'bg-slate-500')
    $divColor.innerHTML = ""
}

// Punto 2
const $divText = document.getElementById("textIngresado")
const $tiping = document.getElementById("textInput")

$tiping.addEventListener("input", mostrar)

const $nuevoH2 = document.createElement("h2")
$nuevoH2.classList.add("w-300px", "text-center", "text-2xl")
$divText.appendChild($nuevoH2)

function mostrar(e) {
    $nuevoH2.textContent = e.target.value
}
const $limpiarDiv = document.getElementById("borrarTexto")
$limpiarDiv.addEventListener("click", limpiar)
function limpiar() {
    $nuevoH2.textContent = ""
    $tiping.value = ""
}

// Punto 3
const $formCalvularM = document.getElementById("calculadoraMasa")
const $mostrarResultado = document.getElementById("resultadoMasa")

$formCalvularM.addEventListener("submit", mostrarMasaCorporal)

function mostrarMasaCorporal(e) {
    e.preventDefault()
    const altura = e.target[0].value
    const peso = e.target[1].value
    $mostrarResultado.innerText = calcularMasa(altura, peso)
}
function calcularMasa(altura_p, peso_p) {
    const alturaMetros = ((altura_p) / (100)) 
    const imc = ((peso_p)/Math.pow(alturaMetros, 2)).toFixed(1)
    return imc
}

// Punto 4
const $formularioPesos = document.getElementById("montoEnPesos")
const $resultadoDolar = document.getElementById("mostrarEnDolares")
const $ingresoPesos = document.getElementById("ingresoPesos")
const $botonEliminar = document.getElementById("eliminarPeso")

$formularioPesos.addEventListener("submit", mostarConversionP)

function mostarConversionP(e) {
    e.preventDefault()
    const pesosIngresados = e.target[0].value
    $resultadoDolar.textContent = conversion(pesosIngresados)
    console.log(e);

}
function conversion(valorIngresado) {
    const valorDolar = 500
    const calculador = ((valorIngresado)/ (valorDolar))
    return parseInt(calculador)
}

$botonEliminar.addEventListener("click", ()=>{
    $ingresoPesos.value = ""
    $resultadoDolar.textContent = ""
})

//De dolar a peso
const $formularioDolar = document.getElementById("montoEnDolares")
const $resultadoPesos = document.getElementById("mostrarEnPesos")
const $ingresoDolares = document.getElementById("ingresoDolares")
const $botonEliminarDolar = document.getElementById("eliminarDolar")

$formularioDolar.addEventListener("submit", mostarConversionD)

function mostarConversionD(e) {
    e.preventDefault()
    const dolarIngresado = e.target[0].value
    $resultadoPesos.textContent = conversionD(dolarIngresado)
}
function conversionD(valorIngresado) {
    const valorDolar = 500
    const calculador  =(valorIngresado*valorDolar)
    return parseInt(calculador)
}
$botonEliminarDolar.addEventListener("click", ()=>{
    $ingresoDolares.value = ""
    $resultadoPesos.textContent = ""
})
