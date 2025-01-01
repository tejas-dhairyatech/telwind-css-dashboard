import { useTranslation } from "react-i18next";
import { links } from "../../utils/Data/menu-link";
import LinkItem from "./LinkItem";
import { useState } from "react";

const Sidebar = ({ activePath, isSidebarOpen, toggleSidebar }: any) => {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState("en"); // Default language

    const toggleLanguage = () => {
        setLanguage(language === "gu" ? "en" : "gu");
        i18n.changeLanguage(language === "gu" ? "en" : "gu");

    };
    return (
        <>
            <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20
             bg-white border-r border-gray-200 sm:translate-x-0 
             transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-full px-4 pb-3 overflow-y-auto">
                    <ul className="space-y-2 font-semibold">
                        {
                            links.map((linkObj, index) => {
                                return (
                                    <>
                                        <LinkItem key={index} {...linkObj} onClick={toggleSidebar} activePath={activePath} />
                                    </>
                                )
                            })
                        }
                        <div className="flex items-center py-10 px-3">

                            {/* Language Switch */}
                            <div
                                className="relative flex items-center w-36 pl-2 h-10 bg-gray-200 rounded-full cursor-pointer"
                                onClick={toggleLanguage}
                            >
                                {/* Sliding Toggle */}
                                <div
                                    className={`absolute h-8 w-16 bg-blue-500 rounded-full transform transition-transform duration-200 ${language === "gu" ? "translate-x-full" : "translate-x-0"
                                        }`}
                                ></div>

                                {/* Gujarati Label */}
                                <span
                                    className={`w-1/2 text-center text-sm font-medium ${language === "gu" ? "text-gray-700" : "text-white"
                                        }`}
                                >
                                    ગુજરાતી
                                </span>

                                {/* English Label */}
                                <span
                                    className={`w-1/2 text-center text-sm font-medium ${language === "en" ? "text-gray-700" : "text-white"
                                        }`}
                                >
                                    English
                                </span>
                            </div>
                        </div>
                    </ul>
                </div>

            </aside>
        </>
    );
}

export default Sidebar;