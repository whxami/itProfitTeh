import React, {useState} from "react";
import FeedbackForm from "@/components/feedbackForm/feedbackForm";
import styles from './styles.module.scss'
import Modal from "@/components/modale/Modal";
import Button from "@/components/button/Button";


function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className={styles.app}>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal visible={isModalOpen} setVisible={closeModal}>
                <div className={styles.modalContent}>
                    <h1>Hello, this is a modal!</h1>
                    <p>You can close it by clicking the button, the overlay, or pressing the Esc key.</p>
                </div>
            </Modal>
            <div className={styles.form}>
            <FeedbackForm/>
            </div>
        </div>
    )
}

export default App;
