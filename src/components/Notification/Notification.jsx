import React from 'react';
import T from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => <p className={styles.text}>{message}</p>;

Notification.propTypes = {
  message: T.string.isRequired,
};

export default Notification;
