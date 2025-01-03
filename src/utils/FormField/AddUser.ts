import { ERROR_MESSAGES } from "../constants/error/errorMessages";
import { REGISTER_FORM } from "../constants/Forms/RegisterForm";

export const AddUser = [
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