import React from "react";

interface MainProps {
    children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
    return (
        <>
            <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-2 
            flex-col lg:flex-row translate-all duration-300 mt-14 ">
                {children}
            </div>

        </>
    );
}

export default Main;