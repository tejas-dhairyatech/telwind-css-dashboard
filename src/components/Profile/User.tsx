import user01 from "../../assets/images/user01.png"

export const User = () => {
    return (
        <div className='flex gap-3 items-center bg-white p-4 rounded-full'>
            <img className='w-14 h-14 rounded-full' src={user01} alt='User Not available' />
            <div>
                <h3 className="font-bold text-gray-500 text-xl">Jhon Doe</h3>
                <p className="font-semibold">Developer</p>
            </div>
        </div>
    )
}
