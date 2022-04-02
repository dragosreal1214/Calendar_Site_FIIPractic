let currDate = new Date();
let today = new Date();

function main() {
    computeCalendar(currDate);
}

function computeCalendar(date) {
    document.getElementById("days").innerHTML = '';

    document.querySelector(".date h1").innerHTML
    =date.toLocaleString('default', { month: 'long' });

    document.querySelector(".date p").innerHTML
    =date.toDateString();

    let firstDayOfMonth = date;

    firstDayOfMonth.setDate(1);

    let noOfDaysInCurrMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0).getDate();
    let noOfDaysInPrevMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth(), 0).getDate();

    for(let i = parseInt(noOfDaysInPrevMonth.toString()) - parseInt(firstDayOfMonth.getDay().toString()) + 1; i <= parseInt(noOfDaysInPrevMonth.toString()); i++) {
        let day = document.createElement("div");
        day.textContent = i.toString();
        day.setAttribute("class", "prev-date");
        document.getElementById("days").appendChild(day);
    }

    for(let i = 1; i <= parseInt(noOfDaysInCurrMonth.toString()); i++) {
        let day = document.createElement("div");
        day.textContent = i.toString();
        if(i.toString() === today.getDate().toString() &&
         today.getMonth() === currDate.getMonth() && today.getFullYear() === currDate.getFullYear()) {
            day.setAttribute("class", "today");
        }
        document.getElementById("days").appendChild(day);
    }

    let lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();

    let nextDays = 42 - document.getElementById("days").childElementCount;

    for(let i = 1; i <= parseInt(nextDays.toString()); i++) {
        let day = document.createElement("div");
        day.textContent = i.toString();
        day.setAttribute("class", "next-date");
        document.getElementById("days").appendChild(day);
    }
}

function increaseMonth() {
    currDate.setMonth(currDate.getMonth() + 1);
    computeCalendar(currDate);
}

function decreaseMonth() {
    currDate.setMonth(currDate.getMonth() - 1);
    computeCalendar(currDate);
}