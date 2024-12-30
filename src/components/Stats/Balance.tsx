import { FiSend } from "react-icons/fi"
import Title from "../../ui/Title"
import BarChart from "./BarChart"

const Balance = () => {


    return (
        <div className="bg-white p-5 rounded-2xl mt-4
        flex-1">
            <div className="flex items-center justify-between">
                <Title>Balance</Title>
                <FiSend className="text-gray-300 bg-gray-500 h-8 w-8 rounded-full p-2" />
            </div>
            <div>
                <h1 className="text-2xl font-bold">$600
                    <span className="text-xl font-medium">
                        (USD)
                    </span>
                </h1>
                <span>On July 2024</span>
            </div>
            <BarChart />

        </div>
    )
}

export default Balance