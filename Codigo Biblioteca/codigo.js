const enviar = document.getElementById('enviar')
const mostrar = document.getElementById('codigo')
const mostrarH1 = document.getElementById('xd')
const reset = document.getElementById('reset')

enviar.addEventListener('click', () => {

    let autorInput = document.getElementById('autor').value.trim().toUpperCase()
    let tituloInput = document.getElementById('titulo').value.trim().toLowerCase()
    let materia = document.getElementById('materia').value;

    if(autorInput === ""){
        alert('Asegurese de ingresar el apellido del autor del Libro')
        return false
    }

    if(autorInput.startsWith(' ') || autorInput.endsWith(' ')){
        alert('Asegúrese de no colocar espacios al comienzo ni al final del autor')
        return false
    }

    if(tituloInput === ""){
        alert('Asegurese de ingresar el Titulo del Libro')
        return false
    }

    if(tituloInput.startsWith(' ') || tituloInput.endsWith(' ')){
        alert('Asegúrese de no colocar espacios al comienzo ni al final del titulo')
        return false
    }

    if(materia === ""){
        alert('Asegúrese de seleccionar la materia del libro')
        return false
    }

    const articulos = ["el ", "la ", "los ", "las ", "the ", "a ", "an ", "un ", "una "];

    for(let art of articulos){
        if (tituloInput.startsWith(art)) {
            tituloInput = tituloInput.replace(art, "");
            break;
        }
    }

    const autor = autorInput.replace(/\s+/g, '').substring(0, 3);
    const titulo = tituloInput.replace(/\s+/g, '').substring(0, 3)

    let codigo = materia + "-" + autor + "-" + titulo

mostrarH1.style.display ="block"
mostrar.textContent = codigo
reset.style.display ="block"

});



