import { DonutChart } from "./DonutChart"
import Shortcut from "./Shortcut"
import { User } from "./User"

const Profile = () => {
    return (
        <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg w-full 
        lg:w-60 xl:w-80 flex flex-col gap-4">
            <User />
            <Shortcut />
            <DonutChart />
        </div>
    )
}

export default Profile