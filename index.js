//Funciones para buscar elementos en el DOM más fácilmente
const $ = (tag) => document.querySelector(tag)
const $$ = (tag) => document.querySelectorAll(tag)

//Función para ejecutar acciones con las tarjetas con los planes
const card = (id) => {
    const element = $(`${id}`) 
    //Función para llevar una targeta un lado o al centro en móbil
    const go = (side) => { element.classList = [side] } 
    //Función para centrar una tarjeta en móbil
    const center = () => {
        if(id == "#starter") card("#pro").go("left")
        else if(id == "#teams") card("#pro").go("right")
    }
    //Función para seleccionar una tarjeta
    const select = () => { element.classList.add("selected") }
    return {
        go, center, select
    }
}

//Objecto con funciones para actuar sobre la tarjeta seleccionada
const selected = {
    //Función para deseleccionar una tarjeta
    remove: () => { 
        const { classList, id } = $("section.selected") || {}
        classList?.remove("selected")  
        return id
    },
    //Función para seleccionar una tarjeta
    add: (id) => {
        card(`#${id}`).select()
        card(`#${id}`).center()
    },
    //Función para volver a dejar en sus posiciones a las terjetas si ninguna está seleccionada, en móbil
    reset: () => {
        card("#pro").go("")
        card("#starter").go("left")
        card("#teams").go("right")
    }
}

//Añadimos el evento de clicar en las tarjetas
$$("section").forEach(section => {
    section.addEventListener("click", ({ currentTarget: { id }, target: { tagName } }) => {
        if(tagName !== "BUTTON") { //Si lo que se ha pulsado no ha sido el boton, es decir, hemos pulsado la tarjeta, interactuamos con ella
            const selectedId = selected.remove() //Deseleccionamos la tarjeta anterior
            if(selectedId != id) selected.add(id) //Si no es la misma, la seleccionamos
            else selected.reset() //Si es la misma, volvemos las tarjetas a sus posiciones originales
        }
    })
})

//Enum para tener listados los planes y sea más entendible en la función Info()
const Plans = {
	Free: 0,
	Pro: 1,
	Teams: 2
}

//Función para mostrar el dialog con el plan que hayamos pulsado
const Info = (plan) => {
    const span = $("#plan-info")
    switch(plan){
        case Plans.Free: span.innerHTML = "Free plan"; break
        case Plans.Pro: span.innerHTML = "Pro plan"; break
        case Plans.Teams: span.innerHTML = "Teams plan"; break
    }
    $("#dialog1").showModal();
}

//Añadimos el evento de click al dialog del email
$("#dialog1").addEventListener("click", ({ target: t }) => {
    if(t.tagName === "DIALOG") t.close() //Si hemos pusado fuera el div interno del dialog, lo cerramos
})
//Añadimos el evento de click al dialog de confirmación
$("#dialog2").addEventListener("click", ({ target: t }) => {
    if(t.tagName === "DIALOG") t.close() //Si hemos pusado fuera el div interno del dialog, lo cerramos
})

//Añadimos el evento de submit al form
$("form").addEventListener("submit", (e) => {
    e.preventDefault() //No dejamos que recargue la página
    $("#dialog1").close() //Cerramos el dialog del email
    $("#dialog2").showModal() //Y abrimos el dialog de confirmación
})
