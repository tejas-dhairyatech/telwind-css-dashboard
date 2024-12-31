import { CiLogin, CiLogout } from "react-icons/ci";
import { FaChartBar, FaFacebookMessenger, FaUsers } from "react-icons/fa";

export const links =[
    {
        href:"/dashboard",
        icon:FaChartBar,
        text:"Dashboard"
    },
    {
        href:"/inbox",
        icon:FaFacebookMessenger,
        text:"Inbox",
        bedge:{
            text:"4",
            color:"text-blue-800 bg-gray-200"
        }
    },
    {
        href:"/user",
        icon:FaUsers,
        text:"User",
        bedge:{
            text:"25",
            color:"text-blue-800 bg-gray-200"
        }
    },
    {
        href:"/sign-in",
        icon:CiLogin,
        text:"Sign In",
        
    },
    {
        href:"/sign-up",
        icon:CiLogout,
        text:"Sign Up",
        
    }
]