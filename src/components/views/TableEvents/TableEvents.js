import React from 'react';
import styles from './TableEvents.module.scss';
import { useParams } from 'react-router-dom';


const TableEvents = () => {
  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Table Events view</h2>
      <h3>Nr: {id}</h3>
    </div>
  );
};

export default TableEvents;
