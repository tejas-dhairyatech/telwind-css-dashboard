import Calendar from "../../ui/Calender"
import { empolyeesData } from "../../utils/constants/employees"
import Card from "./Card"

function Stats() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 ">
                <div className="flex flex-col mt-4 gap-4 h-full md:w-1/2 xl:w-2/5">
                    {empolyeesData.map((emp) => {
                        return (
                            <>
                                <Card data={emp} />
                            </>
                        )
                    })}
                </div>
                <Calendar />
            </div>

        </>
    )
}

export default Stats