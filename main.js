let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let weekArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

let date = new Date()
let calCont = document.getElementById("cal-cont")

const renderMonth = () => {
    calCont.innerHTML = ""

    weekArr.map((arg, ind) => {
        let element = document.createElement("h3")
        element.innerText = arg.slice(0, 2)
        calCont.appendChild(element)
    })

    let weekDay = new Date(date.getFullYear() , date.getMonth(), 1).getDay()
    weekDay = weekDay == 0 ? 6 : weekDay - 1
    let lastDay = new Date(date.getFullYear() , date.getMonth(), 0).getDate()
    for(let i = 0; i < weekDay; i++) {
        let element = document.createElement("div")
        element.className = "beyond-month"
        element.innerText = lastDay - weekDay + i + 1
        calCont.appendChild(element)
    }

    let numDays = new Date(date.getFullYear() , date.getMonth() + 1, 0).getDate()
    for(let i = 0; i < numDays; i++) {
        let element = document.createElement("div")
        element.innerText = i + 1
        calCont.appendChild(element)
    }

    let extraDays = 42 - numDays - weekDay
    for(let i = 0; i < extraDays; i++) {
        let element = document.createElement("div")
        element.className = "beyond-month"
        element.innerText = i + 1
        calCont.appendChild(element)
    }

    let monthYear = document.getElementById("month-year")
    monthYear.innerText = monthArr[date.getMonth()] + " " + date.getFullYear()

    if(new Date().getMonth() == date.getMonth() && new Date().getFullYear() == date.getFullYear()) {
        calCont.children.item(date.getDate() + 6).className = "curr-day"
    }
}

document.getElementById("prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    renderMonth()
})

document.getElementById("next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    renderMonth()
})

renderMonth()

let timer = document.getElementById("clock")
let hours = date.getHours()
let mins = date.getMinutes()
let secs = date.getSeconds()

setInterval(() => {
    secs++
    if(secs % 60 == 0) {
        mins++
        if(mins % 60 == 0) {
            hours++
        }
    }
    timer.innerText = "0".repeat(hours % 24 < 9) + hours % 24 + ":" + "0".repeat(mins % 60 < 10) + mins % 60 + ":" + "0".repeat(secs % 60 < 10) + secs % 60
}, 1000)


let weekDay = date.getDay() == 0 ? 6 : weekDay - 1
let header = document.getElementById("full-date")
let currDay = date.getDate()
header.innerText = weekArr[weekDay].slice(0, 3) + " " + currDay + " " + monthArr[date.getMonth()] + " " + date.getFullYear()