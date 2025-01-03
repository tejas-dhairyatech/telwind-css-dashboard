import { BUTTON_VARIENT } from "../../utils/constants/ui";
import { AddUser } from "../../utils/FormField/AddUser";
import { FormProps } from "../../utils/types/FormProps";
import Button from "../Button";
import FormField from "./FormField";
import { useForm } from "react-hook-form";


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormProps>();



    const onSubmit = (data: FormProps) => {
        console.log("Form Data:", data);
        reset();
        //alert("Form submitted successfully!");

        // Perform any API call or further processing here
    };



    return (


        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-12">
            <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-xl space-y-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 tracking-wide">
                    Add User
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Form Fields */}
                    {AddUser.map((field) => (
                        <FormField
                            key={field.id}
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            options={field.options}
                            error={errors[field.id as keyof FormProps]?.message} // Use keyof FormData
                            register={register(field.id as keyof FormProps, {
                                ...(field.required && { required: `${field.label} is required` }),
                                ...(field.validation && field.validation),
                            })}


                        />
                    ))
                    }

                    {/* Submit Button */}
                    <div className="flex gap-3">
                        <Button text="Save" type="submit" varient={BUTTON_VARIENT.PRIMARY} />
                        <Button text="Cancel" type="button" varient={BUTTON_VARIENT.DANGER} />

                    </div>




                </form>


            </div>
        </div>
    );
};

export default Form;
