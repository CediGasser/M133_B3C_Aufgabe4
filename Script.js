const screws = document.getElementById("screws")
const screw_nuts = document.getElementById("screw_nuts")
const grommets = document.getElementById("grommets")
const total = document.getElementById("total")

const prize_list = {
    "screws": 0.20,
    "screw_nuts": 0.10,
    "grommets": 0.05
}

document.querySelector("input[type=submit]")
        .addEventListener("click", () => {
            const sum = (screws.value*prize_list.screws + screw_nuts.value*prize_list.screw_nuts + grommets.value*prize_list.grommets).toFixed(2    )
            total.innerText = sum
        })

document.querySelector("input[type=reset]")
        .addEventListener("click", () => {
            screws.value = ""
            screw_nuts.value = ""
            grommets.value = ""
            total.innerText = ""
        })