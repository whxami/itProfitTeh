import React, {FC} from "react";
import InputMask from "react-input-mask";
import classes from "./PhoneInput.module.scss";

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
}

const PhoneInput: FC<PhoneInputProps> = ({value, onChange}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <InputMask
            mask="+375 (99) 999-99-99"
            value={value}
            onChange={handleChange}
        >
            {(inputProps: any) => (
                <input
                    className={classes.input}
                    {...inputProps}
                    placeholder="Phone number"
                    type="text"
                />
            )}
        </InputMask>
    );
};

export default PhoneInput;
