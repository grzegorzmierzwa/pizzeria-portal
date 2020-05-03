import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'}>Tables number</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>New booking</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/tables/events/:id'}>Event number</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/tables/events/new'}>New event</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tables;
