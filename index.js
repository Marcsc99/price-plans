const $ = (tag) => document.querySelector(tag)
const $$ = (tag) => document.querySelectorAll(tag)

const card = (id) => {
    const element = $(`${id}`)
    const go = (side) => { element.classList = [side] }
    const center = () => {
        if(id == "#starter") card("#pro").go("left")
        else if(id == "#teams") card("#pro").go("right")
    }
    const select = () => { element.classList.add("selected") }
    return {
        go, center, select
    }
}

const selected = {
    remove: () => { 
        const { classList, id } = $("section.selected") || {}
        classList?.remove("selected")  
        return id
    },
    add: (id) => {
        card(`#${id}`).select()
        card(`#${id}`).center()
    },
    reset: () => {
        card("#pro").go("")
        card("#starter").go("left")
        card("#teams").go("right")
    }
}


$$("section").forEach(section => {
    section.addEventListener("click", ({ currentTarget: { id }, target: { tagName } }) => {
        if(tagName !== "BUTTON") {
            const selectedId = selected.remove();
            if(selectedId != id) selected.add(id);
            else selected.reset()
        }
    })
})

const Plans = {
	Free: 0,
	Pro: 1,
	Teams: 2
}

const Info = (plan) => {
    const span = $("#plan-info")
    switch(plan){
        case Plans.Free: span.innerHTML = "Free plan"; break
        case Plans.Pro: span.innerHTML = "Pro plan"; break
        case Plans.Teams: span.innerHTML = "Teams plan"; break
    }
    $("#dialog1").showModal();
}


$("#dialog1").addEventListener("click", ({ target: t }) => {
    if(t.tagName === "DIALOG") t.close()
})
$("#dialog2").addEventListener("click", ({ target: t }) => {
    if(t.tagName === "DIALOG") t.close()
})

$("form").addEventListener("submit", (e) => {
    e.preventDefault()
    $("#dialog1").close()
    $("#dialog2").showModal()
})
