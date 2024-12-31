import { LinkProps } from "../../utils/types/LinkProps";

const LinkItem = ({ href, text, bedge, icon: Icon, activePath }: LinkProps) => {
    console.log("Link : ", text);

    return (
        <>
            <li className={`transform transition duration-300 
            hover:scale-105 active:scale-95 pointer:active:scale-100 ${activePath == text ? "bg-gray-200 rounded-lg" : ""}`}>
                <a className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200" href={href}>
                    <Icon className="mr-2" />
                    <span className="flex-1 me-3">{text}</span>
                    {bedge && <span className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${bedge.color}`}>{bedge.text}</span>}
                </a>
            </li>
        </>
    );
}

export default LinkItem;