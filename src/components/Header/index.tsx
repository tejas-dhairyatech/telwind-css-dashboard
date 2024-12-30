
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import user01 from "../../assets/images/user01.png"
import { PiCheckCircle, PiToolboxThin } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";


const Header = ({ toggleSidebar = () => { } }: any) => {
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b
             border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                className="flex items-center p-2 text-sm
                                 text-gray-500 rounded-lg sm:hidden
                                  hover:bg-gray-100 focus:outline-none focus:right-2
                                   focus:ring-gray-200" onClick={toggleSidebar}>
                                <HiOutlineMenuAlt2 className="text-2xl" />
                            </button>
                            <a href="#" className="flex ms-2 md:me-24">
                                <MdDashboard className="h-8 me-3 text-xl text-violet-500" />
                                <span className="text-xl self-center font-bold">DaxBod</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-1 p-2  rounded-lg gap-2">
                            <div className="relative inline-block">
                                <button
                                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full 
                                    focus:outline-none shadow-md text-sm"
                                >
                                    <IoMdNotificationsOutline className="text-xl font-medium" />
                                    {(
                                        <span
                                            className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 
                                        text-xs font-bold text-white bg-red-500 rounded-full"
                                            style={{ transform: "translate(50%, -50%)" }}
                                        >
                                            3
                                        </span>
                                    )}
                                </button>
                                {/* <div className="absolute top-0 left-1/2 transform translate-y-8 -translate-x-2 w-4 h-4 bg-white border-t border-l rotate-45"></div>

                                <div className="absolute  -right-24  mt-2 w-80 bg-white border
                                 rounded-lg shadow-2xl">
                                    <div className="flex items-center justify-between p-5 bg-slate-100">
                                        <h3 className="text-xl font-semibold text-gray-800">Notification</h3>
                                        <PiCheckCircle className="text-green-700 text-2xl" />

                                    </div>
                                    <div className="flex gap-2 items-center justify-center p-2">
                                        <FaRegCommentDots className="font-medium text-3xl bg-blue-100 rounded-full p-1 w-8 h-8 text-blue-400" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">
                                                Aida Burg commented your post.
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                5 Min ago
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-right">
                                                3:00 PM
                                            </span>
                                        </div>


                                    </div>
                                    <div className="flex gap-2 items-center justify-center p-2">
                                        <PiToolboxThin className="font-medium text-3xl bg-green-100 rounded-full p-1 w-8 h-8 text-green-400" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">
                                                It's Cristina danny's birthday today.
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                10 Min ago
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-right">
                                                6:00 PM
                                            </span>
                                        </div>


                                    </div>
                                    <div className="flex gap-2 items-center justify-center p-2">
                                        <FcSettings className="font-medium text-3xl bg-red-100 rounded-full p-1 w-8 h-8 text-red-400" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">
                                                Your Profile is Complete 60%
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                10 Min ago
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-right">
                                                6:00 PM
                                            </span>
                                        </div>


                                    </div>

                                </div> */}


                            </div>


                            {/* Avatar */}
                            <img
                                src={user01}
                                alt="User Avatar"
                                className="w-7 h-7 rounded-full"
                            />
                            {/* Name and Info */}
                            <div>
                                <h2 className="text-xs font-semibold text-gray-900">John Doe</h2>

                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;