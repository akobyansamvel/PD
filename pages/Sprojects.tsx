import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/Sprojects.module.css';
import Image from "next/image";
import Me from "../public/me.png"
import All from "../public/all.png"

export default function Main() {
  const [info, setInfo] = useState([]);
  const getInfo = () => {
    axios
      .get('http://45.10.42.218:3457/api/Professor/all')
      .then((response) => {
        const students = response.data.students;
        const projects = response.data.projects;

        const combinedData = students.map((student) => {
          const project = projects.find((project) => project.guid === student.projectId);
          return {
            name: project.name,
            fullName: student.fullName,
            group: student.group,
          };
        });

        setInfo(combinedData);
      });
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.pages}>
          <div className={styles.pages_icon}>
            <Image src={Me}
                   className={styles.img}
                   height={20}
                   width={20}
                   alt={"me"}/>
            <h3 className={styles.pages_text}>Мои проекты</h3>
          </div>
          <div className={styles.pages_icon}>
            <Image src={All}
                   className={styles.img}
                   height={20}
                   width={20}
                   alt={"me"}/>
            <h3 className={styles.pages_text}>Все проекты</h3>
          </div>
        </div>

        <div className={styles.info__box}>
          <div className={styles.box}>
            <div className={styles.head}>
                <h2>ФИО</h2>
                <h2>Группа</h2>
                <h2>Навзание проекта</h2>
            </div>

            {info.map(({fullName, group, projectId}) => {
              return (
                <div className={styles.boddy} key={"index"}>
                      <h3>{fullName}</h3>
                     <h3>{group}</h3>
                    <h3>{projectId}</h3>
                </div>
              );
            })}
          </div>
          <div className={styles.sideBox}>
          <div className={styles.filter}>
            <h2>ФИО</h2>
            <input
              className={styles.filter__input}
              type="text"
              placeholder="Введите ФИО"
            />
            <div className={styles.forHide}>
            <h2>Группа</h2>
            <input
                className={styles.filter__input}
                type="text"
                placeholder="Введите группу"
            />
            <h2>Название проекта</h2>
            <input
                className={styles.filter__input}
                type="text"
                placeholder="Введите группу"
            />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
