import React from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    size: 'm' | 'l',
    text: string,
    onClick: () => void
}

const Button : React.FC<ButtonProps> = React.memo(({
    size,
    text,
    onClick
}: ButtonProps) => {
    return (
        <button onClick={onClick} className={size === 'm' ? styles.button__m : size === "l" ? styles.button__l : styles.button__m}>
            {text}
        </button>
    );
})

Button.displayName = "Button"

export default Button;
