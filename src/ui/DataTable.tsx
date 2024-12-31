const DataTable = ({ data }: { data: any[] }) => {
    return (
        <>
            <div className="overflow-x-auto hidden md:block">
                <table className="min-w-full table-auto border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">

                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Country
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Role
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr
                                key={index}
                                className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
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
                                    <span
                                        className={`${user.bgColor} px-2 py-1 rounded-full text-xs font-semibold`}
                                    >
                                        {user.role}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden">
                <div className="p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Team Members</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data.map((user, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start gap-2"
                            >
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="h-16 w-16 rounded-full object-cover"
                                />
                                <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
                                <p className="text-sm text-gray-600">{user.country}</p>
                                <span
                                    className={`${user.bgColor} px-2 py-1 rounded-full text-xs font-semibold`}
                                >
                                    {user.role}
                                </span>
                                <label className="flex items-center gap-2 mt-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="h-5 w-5 accent-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"

                                    />
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