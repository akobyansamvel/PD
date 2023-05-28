import React, { useState } from 'react';
import styles from '../styles/popupForm.module.css';
const PopupWithForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ваша логика обработки данных формы
        onClose();
    };

    return (
        <>
            <div className={styles.popupo_verlay}></div>
        <div className={styles.popup}>
            <div className={styles.popup__content}>
                <button className={styles.popup__closeButton} onClick={onClose}>
                    X
                </button>
                <form  className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}> Добавить проект</label>
                    <input className={styles.input}
                           placeholder={"Название проекта"}
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button className={styles.button} type="submit">Отправить</button>
                </form>
            </div>
        </div>
            </>
    );
};

export default PopupWithForm;
