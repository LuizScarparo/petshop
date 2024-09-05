import { scheduleNew } from "../services/schedules-new.js"
import { schedulesDay } from "../load/actions/load.js" 

const clientName = document.getElementById("clientName")
const petName = document.getElementById("petName")
const phoneInput = document.getElementById("phoneInput")
const dateInput = document.getElementById("dateSchedule")
const hourInput = document.getElementById("hour")
const description = document.getElementById("description")
const scheduleDate = document.getElementById("scheduleDate")
const form = document.querySelector("form")

clientName.oninput = () => {
    let value = clientName.value.replace(/[0-9]/g, '')
    clientName.value = value
}

petName.oninput = () => {
    let value = petName.value.replace(/[0-9]/g, '')
    petName.value = value
}

phoneInput.oninput = () => {
    phoneInput.value = phoneMask(phoneInput.value)
}

hourInput.oninput = () => {
    hourInput.value = timeMask(hourInput.value)
}

const phoneMask = (value) => {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

const timeMask = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1:$2');
    value = value.substring(0, 5);
    return value;
}

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const date = new Date()

        await scheduleNew (
            {
                id: date.getTime(),
                tutorName: clientName.value,
                petName: petName.value,
                phone: phoneInput.value,
                reservedDate: dateInput.value,
                reservedHour: hourInput.value,
                description: description.value,
                date: scheduleDate.value,
            }
        )

        await schedulesDay()
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível cadastrar um agendamento")
    }

}



