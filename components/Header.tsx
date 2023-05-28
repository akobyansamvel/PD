import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link legacyBehavior href="/">
          <a className={styles.header__text}>
            Московский политех
          </a>
        </Link>
      </nav>
    </header>
  );
}
