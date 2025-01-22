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
            <div>
                <Button onClick={openModal}>Open Modal</Button>
            </div>
            <Modal visible={isModalOpen} setVisible={closeModal}>
                <div className={styles.modalContent}>
                    <h1>Hello, this is a modal!</h1>
                    <p>You can close it by clicking the button, the overlay, or pressing the Esc key.</p>
                    <Button onClick={closeModal}>Close Modal</Button>
                </div>
            </Modal>
            <div className={styles.form}>
            <FeedbackForm/>
            </div>
        </div>
    )
}

export default App;
