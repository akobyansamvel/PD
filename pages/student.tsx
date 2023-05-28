import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/student.module.css';
import ButtonWithPopup from "@/pages/popupButton";
import Image from "next/image";
import Me from "../public/me.png"

export default function Main() {
  const [student, setStudent] = useState([]);
 const getStudent = () => {
   axios
   .get('http://45.10.42.218:3457/api/student/all')
   .then((response) => {
     setStudent(response.data);
   });
 };
 useEffect(() => {
   getStudent();
 }, []);



  return (
    <>
      <div className={styles.body}>
        <div className={styles.pages}>
          <h3>
            <Image
              className={styles.img}
              src={Me}
              width={20}
              height={20}
              alt={"me"}/>
            Мой проект
          </h3>
        </div>

        <div className={styles.info__box}>
          <div className={styles.box}>
            <div className={styles.head}>
                <h2>ФИО</h2>
                <h2>Навзание проекта</h2>
            </div>

            {student.map(({fullName, name}) => {
              return (
                  // eslint-disable-next-line react/jsx-key
                <div className={styles.boddy}>
                      <h3>{fullName}</h3>
                      <h3>{name}</h3>
                </div>
              );
            })}
          </div>
          <div className={styles.sideBox}>
              <div className={styles.button}>
                  <ButtonWithPopup />
              </div>
            <div className={styles.filter}>
                  <h2>Поиск</h2>
                  <input
                      className={styles.filter__input}
                      type="text"
                      placeholder="Введите ФИО"
                  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
