import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
    try {
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        dailySchedules.forEach((schedule) => {
            const li = document.createElement("li")
            const timeStrong = document.createElement("strong")
            const nameSpan = document.createElement("span")
            const tutorSpan = document.createElement("span")
            const description = document.createElement("span")

            li.setAttribute("data-id", "schedule-id")
            timeStrong.textContent = schedule.reservedHour

            nameSpan.textContent = schedule.petName
            tutorSpan.textContent = schedule.tutorName
            description.textContent = schedule.description

            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            li.append(timeStrong, nameSpan, "/", tutorSpan, description, cancelIcon)

            // const hour = dayjs(schedule.reservedHour).hour()
            const [hour] = schedule.reservedHour.split(":")
            console.log(hour)

            if (hour <= 12) {
                periodMorning.appendChild(li)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(li)
            } else {
                periodNight.appendChild(li)
            }

        });

        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}