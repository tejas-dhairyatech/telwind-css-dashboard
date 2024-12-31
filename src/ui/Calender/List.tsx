import React from "react";
import Member from "../../components/Team/Member";

interface ListItem {
    id: number;
    name: string;
    status?: string; // For users
    date?: string;   // For events

}

interface ListProps {
    title: string;
    items: ListItem[];
    type: "user" | "event"; // Type of the list
}

const List: React.FC<ListProps> = ({ title, items, type }) => {
    return (
        <div className="bg-white w-full max-w-lg mt-6 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">{title}</h2>

            {items.length > 0 ? (
                <div className="flex flex-col 
        bg-white rounded-2xl p-3 gap-3 flex-1">
                    {items.map((item, index) => (

                        type === "user" &&
                        <Member key={index} user={item} />
                    ))}



                </div>
            ) : (
                <p className="text-gray-500">No {type === "user" ? "users" : "events"} found.</p>
            )}
        </div>
    );
};

export default List;
