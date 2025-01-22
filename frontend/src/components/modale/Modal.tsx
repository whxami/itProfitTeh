import React, {FC, ReactNode, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import Button from "@/components/button/Button";

interface ModalProps {
    visible: boolean;
    setVisible: (bool:boolean) => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setVisible(false);
            }
        };

        if (visible) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [visible, setVisible]);

    const classes = [styles.modal]
    if(visible){
        classes.push(styles.active);
    }

    return(
        <div className={classes.join(' ')} onClick={()=> setVisible(false)}>
            <div className={styles.modalContent} onClick ={(e)=> e.stopPropagation()}>
                {children}
                <Button onClick={()=> setVisible(false)}>Close Modal</Button>
            </div>
        </div>
    )
};

export default Modal;