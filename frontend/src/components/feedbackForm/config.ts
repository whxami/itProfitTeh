export type inputTypes = 'text' | 'email' | 'textarea'

export const feedbackConfig = [
    {
        name: "name",
        placeholder: "Your name",
        type: "text" as inputTypes,
        required: true,
        validate: (value: string) =>
            value.trim().length > 0 ? "" : "Name is required",
    },
    {
        name: "email",
        placeholder: "Your email",
        type: "email" as inputTypes,
        required: true,
        validate: (value: string) =>
            /^\S+@\S+\.\S+$/.test(value) ? "" : "Enter a valid email",
    },
    {
        name: "phone",
        required: true,
        validate: (value: string) =>
            value.trim().length > 0 ? "" : "Phone is required",
    },
    {
        name: "message",
        placeholder: "Your message",
        type: "textarea" as inputTypes,
        required: true,
        validate: (value: string) =>
            value.trim().length > 0 ? "" : "Message cannot be empty",
    },
];


export const initialFeedbackState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};


export type FeedbackFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};
