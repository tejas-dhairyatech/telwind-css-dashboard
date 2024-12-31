import { IconType } from "react-icons";


export interface LinkProps{
    href:string,
    icon:IconType,
    text:string,
    bedge?:{
        text:string,
        color:string
    },
    activePath:string
}