import React, { useState } from 'react';
import PopupWithForm from "@/pages/popupForm";
import styles from "../styles/popupButton.module.css";

const ButtonWithPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <button className={styles.button} onClick={togglePopup}>Создать проект</button>
            {showPopup && <PopupWithForm onClose={togglePopup} />}
        </>
    );
};

export default ButtonWithPopup;