import React, { useState } from "react";
import { REGISTER_FORM } from "../utils/constants/Forms/RegisterForm";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        organization: "",
        location: "",
        area: "",
        society: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center">
                    Form
                </h2>

                {/* Form Fields */}
                {[
                    { id: "firstName", label: "First Name", type: REGISTER_FORM.INPUT },
                    { id: "lastName", label: "Last Name", type: REGISTER_FORM.INPUT },
                    {
                        id: "gender", label: "Gender", type: REGISTER_FORM.SELECT,
                        options: [
                            {
                                value: "0", text: "Male"
                            },
                            {
                                value: "1", text: "Female"
                            }]
                    },
                    {
                        id: "organization", label: "Organization Name", type: REGISTER_FORM.SELECT,
                        options: [
                            {
                                value: "0", text: "Test organination 01"
                            },
                            {
                                value: "1", text: "Test organination 02"
                            }]
                    },
                    { id: "location", label: "Location", type: REGISTER_FORM.INPUT },
                    { id: "area", label: "Area", type: REGISTER_FORM.INPUT },
                    { id: "society", label: "Society", type: REGISTER_FORM.INPUT },
                ].map((field) => (
                    <div key={field.id} className="relative mb-12">
                        {
                            field.type === REGISTER_FORM.INPUT &&
                            (
                                <>
                                    <input
                                        type="text"
                                        id={field.id}
                                        className="peer block w-full border-2 border-gray-300 
                                        border-t-0 border-x-0 rounded-none bg-transparent px-4 pt-0 
                                        pb-0 text-gray-800 focus:border-blue-500
                            focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-x-2 focus:rounded-md 
                            focus:border-t-2 focus:pt-2 focus:pb-5"
                                        placeholder=" " // Keeps the input style consistent
                                    />
                                    <label
                                        htmlFor={field.id}
                                        className="absolute left-0 -top-7  text-gray-500 text-sm transition-all duration-200 
                            ease-in-out transform peer-placeholder-shown:-top-6 peer-placeholder-shown:left-0 
                             peer-placeholder-shown:text-gray-950 peer-placeholder-shown:scale-100 
                             peer-focus:-top-2.5 peer-focus:left-2.5 peer-focus:text-blue-500 peer-focus:scale-90 
                             bg-white px-1"
                                    >
                                        {field.label}
                                    </label>
                                </>

                            )
                        }
                        {
                            field.type === REGISTER_FORM.SELECT &&
                            (

                                <>
                                    <select
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="peer  block w-full border-2 border-gray-300 border-t-0 border-x-0
                            rounded-none bg-transparent px-4 pt-0 pb-0 text-gray-800 focus:border-blue-500
                            focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-x-2 focus:rounded-md 
                            focus:border-t-2 focus:pt-4 focus:pb-4"

                                    >
                                        <option value="" disabled selected>
                                            Select
                                        </option>
                                        {
                                            field.options?.map((option, index) => {
                                                return (
                                                    <>
                                                        <option value={option.value} key={index}>{option.text}</option>


                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor={field.id}
                                        className="absolute left-0 -top-10 mt-2  text-gray-950 text-sm 
                                            transition-all duration-200 ease-in-out 
                                            transform peer-placeholder-shown:-top-6 peer-placeholder-shown:left-0 
                             peer-placeholder-shown:text-gray-950 peer-placeholder-shown:scale-100   
                             peer-focus:-top-4 peer-focus:left-2.5 peer-focus:text-blue-500 peer-focus:scale-90 
                             bg-white px-1"
                                    >
                                        {field.label}
                                    </label>
                                </>

                            )
                        }

                    </div>
                ))
                }

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-3 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Save
                </button>
            </form >
        </div >

    );
};

export default Form;
