const f = document.getElementById("formulario")

console.log(f)
// Pra que cuando se ejecute el submit no nos reidireccione a ningun citio.
f.addEventListener("submit", evento =>{
    console.log(evento)
    evento.preventDefault()
})