
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import user01 from "../../assets/images/user01.png"


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
                        <div className="flex items-center space-x-1 p-2  rounded-lg ">
                            <button className="flex items-center p-1 text-sm">

                                <IoMdNotificationsOutline className="text-xl font-medium" />


                            </button>

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