import { CiLogin, CiLogout } from "react-icons/ci";
import { FaChartBar, FaFacebookMessenger, FaUsers } from "react-icons/fa";

export const links =[
    {
        href:"#",
        icon:FaChartBar,
        text:"Dashboard"
    },
    {
        href:"#",
        icon:FaFacebookMessenger,
        text:"Inbox",
        bedge:{
            text:"4",
            color:"text-blue-800 bg-gray-200"
        }
    },
    {
        href:"#",
        icon:FaUsers,
        text:"User",
        bedge:{
            text:"25",
            color:"text-blue-800 bg-gray-200"
        }
    },
    {
        href:"#",
        icon:CiLogin,
        text:"Sign In",
        
    },
    {
        href:"#",
        icon:CiLogout,
        text:"Sign Up",
        
    }
]