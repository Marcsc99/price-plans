const $ = (tag) => document.querySelector(tag)
const $$ = (tag) => document.querySelectorAll(tag)

const pro = $("#pro")
const starter = $("#starter")
const teams = $("#teams")

$$("section").forEach(section => {
    section.addEventListener("click", ({currentTarget: { id, classList } }) => {
        const selected = $("section.selected")
        selected?.classList.remove("selected")
        if(selected?.id != id) {
            classList.add("selected")
            if(id == "starter") pro.classList = ["left"]
            else if(id == "teams") pro.classList = ["right"]
        }
        else reset()
    })
})

const reset = () => {
    pro.classList = [""]
    starter.classList = ["left"]
    teams.classList = ["right"]
}