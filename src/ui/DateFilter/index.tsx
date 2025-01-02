import React, { useState } from "react";
import Title from "../Title";

const DateFilter = () => {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Filtering attendance from", startDate, "to", endDate);

        // Mock filter logic (you should replace this with actual data filtering logic)
        // Example data
        const allAttendanceData = [
            { date: "2025-01-01", student: "John Doe", status: "Present" },
            { date: "2025-01-02", student: "Jane Smith", status: "Absent" },
            { date: "2025-01-03", student: "Mark Lee", status: "Present" },
        ];

        const filtered = allAttendanceData.filter((item) => {
            return (
                new Date(item.date) >= new Date(startDate) &&
                new Date(item.date) <= new Date(endDate)
            );
        });

        setFilteredData(filtered);
    };

    return (
        <div className="flex py-12 px-6">
            <div className="w-full bg-white p-8 rounded-lg shadow-lg ">
                <Title>Filter</Title>
                <form onSubmit={handleSubmit} className="">
                    {/* Flex container to align label and input horizontally */}
                    <div className="flex">
                        {/* Start Date */}
                        <div className="w-full flex items-center gap-2">
                            <label htmlFor="startDate" className="text-gray-700 
                            font-semibold mb-1">Select Date</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="p-2 border border-gray-300 rounded-lg  
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <label htmlFor="startDate" className="text-gray-700 
                            font-semibold mb-1">Select Date</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="p-2 border border-gray-300 rounded-lg  
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                            >
                                Filter
                            </button>

                        </div>


                    </div>

                    {/* Filter Button */}

                </form>

                {/* Display Filtered Data */}
                {filteredData.length > 0 && (
                    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Filtered Attendance</h3>
                        <ul>
                            {filteredData.map((record, index) => (
                                <li key={index} className="mb-2">
                                    <span className="font-medium">Date:</span> {record.date},
                                    <span className="font-medium"> Student:</span> {record.student},
                                    <span className="font-medium"> Status:</span> {record.status}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Display message if no data found */}
                {filteredData.length === 0 && startDate && endDate && (
                    <div className="mt-6 text-red-500">
                        No attendance records found for the selected date range.
                    </div>
                )}
            </div>
        </div>
    );
};

export default DateFilter;
