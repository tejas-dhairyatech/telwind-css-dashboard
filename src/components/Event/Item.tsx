const Item = ({ data }: any) => {
    return (
        <div className="flex gap-5 items-center">
            <span className="bg-gray-300 rounded-xl p-2 
            font-bold w-16 h-16 text-center text-gray-700">{data.date}</span>
            <div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-400">{data.description}</p>
            </div>
        </div>
    )
}

export default Item