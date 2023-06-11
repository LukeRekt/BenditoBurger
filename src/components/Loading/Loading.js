import React from 'react';

import styles from "./Loading.module.css"

function Loading() {
  return (
    <div className={styles.container}>

      <div className={`${styles.dot} ${styles.dot_one}`}/>

      <div className={`${styles.dot} ${styles.dot_two}`}/>

      <div className={`${styles.dot} ${styles.dot_three}`}/>

    </div>
  );
}

export default Loading;