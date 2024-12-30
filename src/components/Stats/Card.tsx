
const Card = ({ data }: any) => {
    return (
        <div className="flex items-center gap-4 rounded-2xl bg-white">
            <span className={`px-3 py-6 text-3xl ${data.bgColor}`}>
                <data.icon />
            </span>
            <div>
                <h2 className="text-xl">
                    <span className="font-bold text-xl">{data.count}/250</span>
                </h2>
                <p className="font-bold">
                    {data.title}
                </p>
            </div>

        </div>
    )
}

export default Card