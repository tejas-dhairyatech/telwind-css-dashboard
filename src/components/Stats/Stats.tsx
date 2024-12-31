import { useState } from "react"
import Calendar from "../../ui/Calender/Calender"
import List from "../../ui/Calender/List"
import { empolyeesData } from "../../utils/Data/employees"
import { DonutChart } from "../Profile/DonutChart"
import Card from "./Card"
import { format } from "date-fns"

function Stats() {

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const [attendance] = useState<any>({
        "2024-12-30": [
            {
                name: "Robert Fox",
                country: "Syam Park 2, Panchasar",
                image: "https://randomuser.me/api/portraits/men/1.jpg", // Link to the profile image
                role: "Std : 2",
                bgColor: "bg-yellow-100",
            },
            {
                name: "John Doe",
                country: "USA",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                role: "Std : 3",
                bgColor: "bg-blue-100",
            },
            {
                name: "Jane Smith",
                country: "India",
                image: "https://randomuser.me/api/portraits/women/3.jpg",
                role: "Std : 4",
                bgColor: "bg-green-100",
            },
        ],
        "2024-12-31": [
            { id: 3, name: "Emily Johnson", status: "Present" },
            { id: 4, name: "Michael Brown", status: "Present" },
        ],
    });

    const getAttendanceForDate = () => {
        const dateKey = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
        return attendance[dateKey] || [];

    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 ">
                <div className="flex flex-col mt-0 gap-4 h-full md:w-1/2 lg:w-1/4 xl:w-2/5">
                    {empolyeesData.map((emp) => {
                        return (
                            <>
                                <Card data={emp} />
                            </>
                        )
                    })}
                    <DonutChart />

                </div>
                <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <div>
                    <div className="max-w-lg mt-5">
                        <h2 className="text-lg font-bold">
                            {selectedDate ? format(selectedDate, "EEEE, MMMM d") : "Select a Date"}
                        </h2>
                    </div>

                    <List title="User Attendance" items={getAttendanceForDate()} type="user" />

                </div>

            </div>


        </>
    )
}

export default Stats