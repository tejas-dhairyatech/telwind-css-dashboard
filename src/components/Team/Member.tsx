const Member = ({ user }: any) => {
    return (
        <div className="flex items-center 
        justify-between">
            <div className="flex items-center gap-2">
                <img src={user.image}
                    className="h-12 w-12 rounded-full" />

                <div>
                    <h1 className="font-bold">
                        {user.name}
                    </h1>
                    <span className="font-semibold">
                        {user.country}
                    </span>

                </div>
            </div>
            <span className={`${user.bgColor} p-2 px-4 rounded-full text-sm font-semibold text-gray-900`}>{user.role}</span>

        </div>
    )
}

export default Member