const boton = document.querySelector("#btn")

console.log(boton)

// Lo que pasa en este ejerccio es, metodo (addEventListener) lanzara un click cunado presione el botton
boton.addEventListener("click", () => {// esta es una funcion para que se ejecute el click
    //console.log("Buen trabajo UBERNEL, vaz progresando full!!")
    //alert("Se ha hecho un click")// es una laerta de un click.
    //confirm("¿Estas de acuerdo?") && console.log("Un viruz!! por Bobo..")// confirmar si quieres hacer algo . si es true se jecuta el ok.
    confirm("¿Estas de acuerdo?")// ? es el signo para si quieres y : sino quieres.
        ? console.log("Es un viruz!! por Bobo te paso esto!!!")
        : console.log("jajjajaja. te dio miedo!!")

})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cual es tu nombre?")
    if (nombre){
    console.log("Tu nombre es " + nombre)
}else {
    console.log("Acabas de cancelar todo!!")
}
})

const lista = [{
    nombre: "Fionha",
    edad: 11
}, {
    nombre: "Jose",
    edad: 15
}, {
    nombre: "Iria",
    edad: 37
}]

//console.log(lista)
console.table(lista)// te muestra el objeto en una tabla.