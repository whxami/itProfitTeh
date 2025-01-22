import {FC} from 'react'
import styles from './Button.module.scss'

interface ButtonProps{
    children:string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button:FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>{children}</button>
    )
}

export default Button;