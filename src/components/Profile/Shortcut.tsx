import { IoIosArrowForward } from "react-icons/io"
import Title from "../../ui/Title"
import { shortcutLink } from "../../utils/Data/shortcut-link"

const Shortcut = () => {
    return (
        <div className="flex gap-4 flex-col 
        bg-white rounded-lg p-4">
            <Title>Shortcuts</Title>
            {
                shortcutLink.map((link, index) => {
                    return (
                        <>
                            <div key={index} className="flex items-center justify-between rounded-sm cursor-pointer">

                                <div className="flex gap-4 items-center">
                                    <span className="bg-blue-100 p-2 rounded-full w-8 h-8 
                                    flex justify-center items-center">
                                        {
                                            <link.icon />
                                        }
                                    </span>
                                    <h3 className="font-medium">
                                        {link.title}
                                    </h3>

                                </div>
                                <span className="bg-gray-300 p-2 rounded-md hover:mr-3 transition-all duration-500">
                                    <IoIosArrowForward />
                                </span>


                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Shortcut