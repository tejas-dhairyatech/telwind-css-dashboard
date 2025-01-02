import React from "react";
import { REGISTER_FORM } from "../../utils/constants/Forms/RegisterForm";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
    id: string;
    label: string;
    type: string;
    options?: { value: string; text: string }[];
    error?: FieldError | string;
    register: any;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, options, error, register }) => {

    return (
        <div key={id} className="relative mb-6">
            {
                type === REGISTER_FORM.TEXT &&
                (
                    <>
                        <input
                            type="text"
                            id={id}
                            className="peer block w-full border-2 border-gray-300 
                            rounded-xl bg-transparent px-4 pt-6 pb-2 text-sm md:text-lg
                             text-gray-800 focus:border-blue-600 focus:ring-2
                              focus:ring-blue-500 focus:outline-none transition-all duration-300"
                            placeholder=" "
                            {...register}
                        />
                        <label
                            htmlFor={id}
                            className="absolute left-4 top-1 text-gray-500
                             text-base transition-all duration-300
                              ease-in-out transform peer-placeholder-shown:top-6
                               peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-sm peer-focus:top-0
                               md:peer-placeholder-shown:text-lg
                                peer-focus:text-blue-600 peer-focus:text-sm peer-focus:left-4 peer-focus:scale-90 peer-focus:font-semibold"
                        >
                            {label}
                        </label>
                    </>
                )
            }
            {
                type === REGISTER_FORM.PHONE_NUMBER &&
                (
                    <>
                        <input
                            type="number"
                            id={id}
                            className="peer block w-full border-2 border-gray-300 
                            rounded-xl bg-transparent px-4 pt-6 pb-2 text-sm md:text-lg
                             text-gray-800 focus:border-blue-600 focus:ring-2
                              focus:ring-blue-500 focus:outline-none transition-all duration-300"
                            placeholder=" "
                            {...register}
                        />
                        <label
                            htmlFor={id}
                            className="absolute left-4 top-1 text-gray-500
                             text-base transition-all duration-300
                              ease-in-out transform peer-placeholder-shown:top-6
                               peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-sm peer-focus:top-0
                               md:peer-placeholder-shown:text-lg
                                peer-focus:text-blue-600 peer-focus:text-sm peer-focus:left-4 peer-focus:scale-90 peer-focus:font-semibold"
                        >
                            {label}
                        </label>
                    </>
                )
            }
            {
                type === REGISTER_FORM.SELECT &&
                (
                    <>
                        <select
                            id={id}
                            {...register}
                            value={""}
                            className="peer block w-full border-2 border-gray-300 
                            rounded-xl bg-transparent px-4 pt-6 pb-2 text-sm md:text-lg
                             text-gray-800 focus:border-blue-600 focus:ring-2
                              focus:ring-blue-500 focus:outline-none transition-all duration-300"

                        >
                            <option disabled selected value="">Select</option>
                            {options?.map((opt, index) => {
                                return (
                                    <>
                                        <option value={opt.value} key={index}>{opt.text}</option>
                                    </>
                                )

                            })}
                        </select>
                        <label
                            htmlFor={id}
                            className="absolute left-4 top-1 text-gray-500
                             text-base transition-all duration-300
                              ease-in-out transform peer-placeholder-shown:top-6
                               peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-sm peer-focus:top-0
                               md:peer-placeholder-shown:text-lg
                                peer-focus:text-blue-600 peer-focus:text-sm peer-focus:left-4 peer-focus:scale-90 peer-focus:font-semibold"
                        >
                            {label}
                        </label>
                    </>
                )
            }


            {error && (
                <p id={`${id}-error`} className="text-red-500 text-sm mt-2">
                    {typeof error === 'string' ? error : error.message}
                </p>
            )}
        </div>
    );
};

export default FormField;
