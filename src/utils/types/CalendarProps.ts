import { Dispatch, SetStateAction } from "react"

type CalendarProps = {
    setSelectedDate:Dispatch<SetStateAction<Date|null>>
    selectedDate:Date|null
}

export default CalendarProps