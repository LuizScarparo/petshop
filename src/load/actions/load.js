import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day.js"
import { schedulesShow } from "./show.js"

const selectedDate = document.getElementById("scheduleDate")

export async function schedulesDay() {
    const date = selectedDate.value
    const dailySchedules = await scheduleFetchByDay({ date })

    schedulesShow({ dailySchedules })
}