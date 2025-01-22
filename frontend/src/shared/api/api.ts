import {FeedbackFormData} from "@/components/feedbackForm/config";

export const URL = "http://localhost:5000/api"

export const sendMessage = async (data: FeedbackFormData) => {
    try {
        const response = await fetch(URL + '/sendmessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return await response.json();
    } catch (error) {
        throw error;
    }
};