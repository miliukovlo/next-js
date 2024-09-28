import React, { useCallback } from 'react';
import styles from "./Input.module.css"

interface InputProps {
    size: 'm' | 'l',
    value: string,
    type: "text" | "password",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

const Input : React.FC<InputProps> = React.memo(({
    size,
    value,
    type,
    onChange,
    placeholder
} : InputProps) => {

    const currentChange = useCallback(onChange, [onChange, value])

    return (
        <input 
        type={type}
        className={size ==='m' ? styles.input__m : size ==='l' ? styles.input__l : styles.input__m}
        value={value}
        placeholder={placeholder}
        onChange={currentChange}
        />
    );
})

Input.displayName = "Input"

export default Input;
