// $("celector").accion()
//$("li").hide()

//ejemplo funcion flecha
$(() => {
    $(".hide-btn").click(() => {
        //$("h1").hide()
        $("h1").fadeOut() //Oculrta el h1
    })
    $(".show-btn").click(() => {
        //$("#el-1").hide()
        $("h1").fadeIn()// Muestra de nuevo el h1
    })

    $("li").click(() => {// haciendo clik en cualquiera de las lista el h1 se coloca azul.
        $("h1").css({ color: "blue"})
    })
    $(".new-elemento").click(() => {// haciendo click se agrega una lista .
        //$("ul").append("<li>New Elemento</li>") // se coloca de bajo.
        $("ul").prepend("<li>New Elemento</li>")
    })
    $("li").mouseenter((elem) => {
        elem.target.style.color = "red"
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})

