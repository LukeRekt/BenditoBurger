import React from 'react';


import styles from "./Popup.module.css"
import Loading from '../Loading/Loading';

function Popup() {
  return (
    <div className={styles.container}>
      <div className={styles.widget}>
        <Loading/>
      </div>
    </div>
  );
}

export default Popup;