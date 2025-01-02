import { ERROR_MESSAGES } from "../../utils/constants/error/errorMessages";
import { REGISTER_FORM } from "../../utils/constants/Forms/RegisterForm";
import { FormProps } from "../../utils/types/FormProps";
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
    const fields = [
        { id: 'firstName', label: 'First Name', type: REGISTER_FORM.TEXT, required: true },
        {
            id: 'lastName', label: 'Last Name', type: REGISTER_FORM.TEXT, required: true

        },
        {
            id: 'phoneNumber', label: 'Phone Number', type: REGISTER_FORM.PHONE_NUMBER, required: true,
            validation: {
                pattern: {
                    value: /^[6-9]\d{9}$/, // Regular expression for phone number
                    message: ERROR_MESSAGES.PHONE_NUMBER_VALID,
                },
            },
        },

        {
            id: 'gender', label: 'Gender', type: REGISTER_FORM.SELECT, options: [
                { value: '0', text: 'Male' },
                { value: '1', text: 'Female' },
            ]
        },
        {
            id: 'organization', label: 'Organization Name', type: REGISTER_FORM.SELECT, required: true, options: [
                { value: '0', text: 'Test organization 01' },
                { value: '1', text: 'Test organization 02' },
            ]
        },
        { id: 'location', label: 'Location', type: REGISTER_FORM.TEXT, required: true },
        { id: 'area', label: 'Area', type: REGISTER_FORM.TEXT },
        { id: 'society', label: 'Society', type: REGISTER_FORM.TEXT, required: true },
    ];


    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-12">
            <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-xl space-y-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 tracking-wide">
                    Add User
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Form Fields */}
                    {fields.map((field) => (
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
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500
                     text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-2xl 
                     transition duration-300 transform hover:scale-105"

                    >
                        Save
                    </button>
                </form>


            </div>
        </div>
    );
};

export default Form;
