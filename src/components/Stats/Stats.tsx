import { empolyeesData } from "../../utils/constants/employees"
import Balance from "./Balance"
import Card from "./Card"

function Stats() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-4 h-full">
                    {empolyeesData.map((emp, ind) => {
                        return (
                            <>
                                <Card data={emp} />
                            </>
                        )
                    })}
                </div>
                <Balance />
            </div>

        </>
    )
}

export default Stats