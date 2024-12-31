const DataTable = ({ data }: { data: any[] }) => {
    return (
        <>
            {/* Desktop/Table View */}
            <div className="overflow-x-auto hidden lg:block">
                <table className="min-w-full table-auto border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider"></th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Country</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr
                                key={index}
                                className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                            >
                                <td className="px-6 py-4 text-sm text-center text-blue-500 font-medium cursor-pointer hover:underline">
                                    Edit
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 flex items-center gap-3">
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        className="h-8 w-8 rounded-full object-cover"
                                    />
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.country}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <span className={`${user.bgColor} px-2 py-1 rounded-full text-xs font-semibold`}>
                                        {user.role}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile/Grid View */}
            <div className="lg:hidden">
                <div className="p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Team Members</h1>
                    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data.map((user, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 transform hover:shadow-xl"
                            >
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="h-16 w-16 rounded-full object-cover"
                                />
                                <h2 className="text-sm md:text-lg font-bold text-gray-800 ">{user.name}</h2>
                                <p className="text-sm md:text-md text-gray-600">{user.country}</p>
                                <span className={`${user.bgColor} px-2 py-1 rounded-full text-xs font-bold `}>
                                    {user.role}
                                </span>
                                <label className="flex items-center gap-2 mt-4 cursor-pointer">
                                    <span className="relative flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            className="absolute opacity-0 peer"
                                        />
                                        <span className="w-6 h-6 border-4 border-gray-300 rounded-full flex items-center justify-center 
                                                        peer-checked:bg-blue-500 peer-checked:border-blue-500 
                                                        peer-focus:ring-2 peer-focus:ring-blue-400 transition-all duration-300 
                                                        transform hover:scale-110">
                                            {/* Animated Checkmark Icon */}

                                        </span>
                                    </span>
                                    <span className="text-sm font-semibold text-gray-700">
                                        Mark as Present
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataTable;
