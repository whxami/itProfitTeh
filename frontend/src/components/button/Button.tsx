import {FC} from 'react'
import styles from './Button.module.scss'

interface ButtonProps{
    children:string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button:FC<ButtonProps> = ({children, onClick, disabled}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={styles.button}>{children}</button>
    )
}

export default Button;