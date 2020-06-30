import React from 'react';

import styles from './logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <section className={styles.logo_round} />
    <section className={styles.logo_rectangular} />
    <section className={styles.logo_round} />
    <section className={styles.logo_table} />
  </div>
);

export default Logo;
