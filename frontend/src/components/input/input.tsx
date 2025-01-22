import { FC, useState, ChangeEvent } from 'react';
import styles from './input.module.scss';
import {inputTypes} from "@/components/feedbackForm/config";

interface InputProps {
    placeholder: string;
    type: inputTypes;
    value: string;
    onChange: (value: string) => void;
}


const Input: FC<InputProps> = ({ placeholder, type, value, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    if (type === 'textarea') {
        return (
            <textarea
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                rows={5}
            />
        );
    }

    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;