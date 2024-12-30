import React, { useState } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameMonth,
    isSameDay,
} from "date-fns";
import List from "./List";

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
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

    // const [events] = useState<any>({
    //     "2024-12-30": [
    //         { id: 1, name: "Team Meeting", date: "10:00 AM" },
    //         { id: 2, name: "Project Deadline", date: "5:00 PM" },
    //     ],
    //     "2024-12-31": [{ id: 3, name: "New Year Party", date: "8:00 PM" }],
    // });

    const handleDate = (date: string) => {
        setSelectedDate(new Date(date));
    };

    const renderHeader = () => (
        <div className="flex justify-between items-center py-4 px-2">
            <button
                className="text-blue-500 font-semibold"
                onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
            >
                Previous
            </button>
            <h2 className="text-lg font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
            <button
                className="text-blue-500 font-semibold"
                onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
            >
                Next
            </button>
        </div>
    );

    const renderDays = () => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return (
            <div className="grid grid-cols-7 text-center font-semibold text-gray-500">
                {daysOfWeek.map((day) => (
                    <div key={day} className="py-2">
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const formattedDate = format(day, "yyyy-MM-dd");
                const isCurrentMonth = isSameMonth(day, monthStart);
                const isSelected = selectedDate && isSameDay(day, selectedDate);

                days.push(
                    <div
                        key={day.toString()}
                        className={`p-2 lg:p-4 text-center rounded-xl mt-2 shadow-sm cursor-pointer 
                            transition-all ${isSelected
                                ? "bg-blue-700 text-white"
                                : isCurrentMonth
                                    ? "bg-gray-100 text-gray-800"
                                    : "bg-gray-50 text-gray-400"
                            } hover:bg-blue-200 active:bg-blue-700 focus:outline-none`}
                        onClick={() => handleDate(formattedDate)}
                    >
                        {format(day, "d")}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div key={day.toString()} className="grid grid-cols-7 gap-1">
                    {days}
                </div>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };

    const getAttendanceForDate = () => {
        const dateKey = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
        console.log("Date Key :: ", selectedDate);

        return attendance[dateKey] || [];

    };

    // const getEventsForDate = () => {
    //     const dateKey = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
    //     return events[dateKey] || [];
    // };

    return (
        <div className="bg-gray-50 flex flex-col items-center py-4 px-2">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
                {renderHeader()}
                {renderDays()}
                <div className="p-2">{renderCells()}</div>

            </div>
            <div className="bg-white max-w-lg mt-5">
                <h2 className="text-lg font-bold">
                    {selectedDate ? format(selectedDate, "EEEE, MMMM d") : "Select a Date"}
                </h2>
            </div>

            <List title="User Attendance" items={getAttendanceForDate()} type="user" />

        </div>
    );
};

export default Calendar;
