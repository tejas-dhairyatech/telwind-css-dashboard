import { BUTTON_CLASS, BUTTON_VARIENT } from "../../utils/constants/ui"

function Button({ text, type, varient }: any) {
    const getVarientColor = () => {
        switch (varient) {
            case BUTTON_VARIENT.PRIMARY:
                return BUTTON_CLASS.PRIMARY
            case BUTTON_VARIENT.DANGER:
                return BUTTON_CLASS.DANGER

            default:
                return BUTTON_CLASS.PRIMARY
        }
    }
    return (
        <button
            type={type}
            className={`${getVarientColor()} w-full text-white font-medium py-2 px-4 rounded-lg 
            hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:ring-offset-2 transition-all shadow-lg hover:shadow-2xl duration-300 
            transform hover:scale-105`}
        >
            {text}
        </button>
    )
}

export default Button