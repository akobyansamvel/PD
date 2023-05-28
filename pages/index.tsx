import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import styles from '../styles/index.module.css';


export default function Index() {

  return (
    <>
      <div className={styles.body}>
        <div className={styles.form}>
          <h1 className={styles.head}>Авторизация</h1>
          <form action="">
            <input className={styles.login} type="text" placeholder="Логин" />
          </form>
          <form>
            <input
              className={styles.password}
              type="password"
              placeholder="Пароль"
            />
          </form>
          <button className={styles.button}>Войти</button>
        </div>
      </div>
    </>
  );
}
