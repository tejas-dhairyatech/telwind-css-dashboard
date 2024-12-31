
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import user01 from "../../assets/images/user01.png"
import { useEffect, useRef, useState } from "react";


const Header = ({ toggleSidebar = () => { } }: any) => {
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Refs for both cards
    const profileCardRef = useRef<HTMLDivElement>(null);
    const notificationCardRef = useRef<HTMLDivElement>(null);

    // Close the cards when clicking outside
    useEffect(() => {
        const handleNotificationClickOutside = (event: any) => {
            if (

                notificationCardRef.current &&
                !notificationCardRef.current.contains(event.target)
            ) {

                setIsOpenNotification(false);
            }



        };
        const handleProfileClickOutside = (event: any) => {
            if (

                profileCardRef.current &&
                !profileCardRef.current.contains(event.target)
            ) {

                setIsProfileOpen(false);
            }
        }

        document.addEventListener("mousedown", handleNotificationClickOutside);
        document.addEventListener("mousedown", handleProfileClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleNotificationClickOutside);
            document.removeEventListener("mousedown", handleProfileClickOutside);
        };
    }, []);
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
                            <div className="relative">
                                <div ref={notificationCardRef}>
                                    <button
                                        onClick={() => { setIsOpenNotification(!isOpenNotification); setIsProfileOpen(false) }}
                                        className="relative p-2 bg-gray-200 hover:bg-gray-300 rounded-full 
            focus:outline-none shadow-md text-sm"
                                    >
                                        {/* Notification Icon */}
                                        <IoMdNotificationsOutline className="text-xl font-medium" />

                                        {/* Notification Badge */}
                                        <span
                                            className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 
            text-xs font-bold text-white bg-red-500 rounded-full"
                                        >
                                            3
                                        </span>
                                    </button>
                                    {
                                        isOpenNotification && (
                                            <>

                                                <div

                                                    className="absolute -right-24 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10"
                                                >
                                                    {/* Header */}
                                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white font-semibold">
                                                        Notifications
                                                    </div>

                                                    {/* Notifications */}
                                                    <div className="p-4 space-y-3">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                                <IoMdNotificationsOutline className="text-blue-500 text-xl" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-gray-700">
                                                                    New comment on your post
                                                                </p>
                                                                <p className="text-xs text-gray-500">2 mins ago</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                                                                <IoMdNotificationsOutline className="text-green-500 text-xl" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-gray-700">
                                                                    Your profile was viewed
                                                                </p>
                                                                <p className="text-xs text-gray-500">10 mins ago</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                                                                <IoMdNotificationsOutline className="text-red-500 text-xl" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-gray-700">
                                                                    Update your password
                                                                </p>
                                                                <p className="text-xs text-gray-500">1 day ago</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Footer */}
                                                    <div className="p-4 border-t border-gray-200">
                                                        <button
                                                            className="w-full text-sm text-blue-500 hover:text-blue-700 font-semibold"
                                                            onClick={() => alert("View All Notifications")}
                                                        >
                                                            View All Notifications
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>

                            </div>

                            {/* Avatar */}
                            <div className="relative">
                                <div ref={profileCardRef}>
                                    <div className="flex items-center justify-center gap-1" onClick={() => { setIsProfileOpen(!isProfileOpen); setIsOpenNotification(false) }}>
                                        <img
                                            src={user01}
                                            alt="User Avatar"
                                            className="w-7 h-7 rounded-full"
                                        />
                                        {/* Name and Info */}
                                        <h2 className="text-xs font-semibold text-gray-900">John Doe</h2>
                                    </div>
                                    {/* Card */}
                                    {isProfileOpen && (
                                        <>

                                            <div
                                                className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                                            >
                                                {/* Header Section */}
                                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white flex items-center space-x-3">
                                                    <img
                                                        src={user01}
                                                        alt="User Avatar"
                                                        className="w-10 h-10 rounded-full border-2 border-white"
                                                    />
                                                    <div>
                                                        <h2 className="text-sm font-semibold">John Doe</h2>
                                                        <p className="text-xs text-gray-200">johndoe@example.com</p>
                                                    </div>
                                                </div>

                                                {/* Card Body */}
                                                <div className="p-4 space-y-3">
                                                    <a
                                                        href="/profile"
                                                        className="block text-sm text-gray-700 hover:text-blue-500"
                                                    >
                                                        View Profile
                                                    </a>
                                                    <a
                                                        href="/settings"
                                                        className="block text-sm text-gray-700 hover:text-blue-500"
                                                    >
                                                        Settings
                                                    </a>
                                                    <button
                                                        onClick={() => alert("Logged out!")}
                                                        className="block w-full text-left text-sm text-red-500 hover:text-red-700"
                                                    >
                                                        Sign Out
                                                    </button>
                                                </div>
                                            </div>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;