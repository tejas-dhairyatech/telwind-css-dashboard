import { links } from "../../utils/Data/menu-link";
import LinkItem from "./LinkItem";

const Sidebar = ({ activePath, isSidebarOpen, toggleSidebar }: any) => {
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
                    </ul>
                </div>

            </aside>
        </>
    );
}

export default Sidebar;