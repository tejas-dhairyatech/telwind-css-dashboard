
const Member = ({ user }: any) => {
    return (
        <div className="flex items-center justify-between gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
                {/* User Image */}
                <img
                    src={user.image}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                    {/* Name and Country */}
                    <h1 className="font-bold text-sm text-gray-800">{user.name}</h1>
                    <span className="text-xs text-gray-600">{user.country}</span>
                </div>
            </div>

            {/* Role with Background */}
            <span
                className={`${user.bgColor} p-1 px-2 w-20 text-center rounded-full text-xs font-semibold text-gray-900`}
            >
                {user.role}
            </span>
        </div>
    );
};

export default Member;
