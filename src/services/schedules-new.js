import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, tutorName, petName, phone, reservedDate, reservedHour, description, date}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, tutorName, petName, phone, reservedDate, reservedHour, description, date })
        })

        alert("Agendamento realizado com sucesso")
    } catch (error) {
        alert("Não foi possível concluir o agendamento")
        console.log(error)
    }
}