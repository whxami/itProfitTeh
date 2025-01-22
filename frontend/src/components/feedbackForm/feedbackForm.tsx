import { FC, useState } from "react";
import styles from "./feedback.module.scss";
import Input from "@/components/input/input";
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import Button from "@/components/button/Button";
import { feedbackConfig, FeedbackFormData, initialFeedbackState } from "@/components/feedbackForm/config";
import {sendMessage} from "@shared/api/api";

const FeedbackForm: FC = () => {
    const [formState, setFormState] = useState<FeedbackFormData>(initialFeedbackState);
    const [errors, setErrors] = useState<Partial<FeedbackFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (field: keyof FeedbackFormData, value: string) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = async () => {
        const newErrors: Partial<FeedbackFormData> = {};
        feedbackConfig.forEach((field) => {
            const error = field.validate(formState[field.name as keyof FeedbackFormData]);
            if (error) {
                newErrors[field.name as keyof FeedbackFormData] = error;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            setErrorMessage('');
            setSuccessMessage('');

            try {
                const response = await sendMessage(formState);

                if (response.status === 'success') {
                    setSuccessMessage(response.msg);
                    setFormState(initialFeedbackState);
                } else if (response.status === 'error') {
                    setErrors(response.fields);
                }
            } catch (error) {
                setErrorMessage('Error sending the form');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className={styles.form}>
            {feedbackConfig.map((field) => {
                const errorMessage = errors[field.name as keyof FeedbackFormData];
                if (field.name === "phone") {
                    return (
                        <div key={field.name} className={styles.inputWrapper}>
                            <PhoneInput
                                value={formState.phone}
                                onChange={(value: string) => handleChange("phone", value)}
                            />
                            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                        </div>
                    );
                }


                return (
                    <div key={field.name} className={styles.inputWrapper}>
                        <Input
                            placeholder={field.placeholder}
                            type={field.type}
                            value={formState[field.name as keyof FeedbackFormData]}
                            onChange={(value: string) => handleChange(field.name as keyof FeedbackFormData, value)}
                        />
                        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                    </div>
                );
            })}

            <Button onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting? "Sending..." : "Send"}</Button>
            {successMessage && <div className={styles.success}>{successMessage}</div>}
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </div>
    );
};

export default FeedbackForm;
