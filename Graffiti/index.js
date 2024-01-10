
const $formulario = document.querySelector("form")
const $divDos = document.getElementById("war")

$formulario.addEventListener("submit", formData)

function formData (e){
    e.preventDefault()
    const formularioDatos = e.target[0].value
    const bgColor = e.target[1].value
    const fontCursive = e.target[2].checked
    const sinFont = e.target[3].checked

    if (formularioDatos != "" && fontCursive) {
        $divDos.innerHTML += datosFormulario(formularioDatos, bgColor, "italic")
    }
    if(formularioDatos != "" && sinFont){
    $divDos.innerHTML += datosFormulario(formularioDatos, bgColor, "not-italic")
    }
}
let datosFormulario = (valor, colores, estiloH2) =>{
    return `<div  class = " bg-[${colores}] flex flex-col items-center h-[300px] w-[300px] border border-solid border-black rounded-lg ml-7">
    <a class = "p-3 font-bold text-2xl self-end mr-5 mt-4" href ="#">x</a>
    <h2 class = "${estiloH2} mt-6 font-bold text-2xl">${valor}</h2>
    </div>`
}

$divDos.addEventListener('click', remover)
function remover(e) {
    if (e.target.classList.contains("self-end")) {
        e.target.parentElement.remove()
    }
}