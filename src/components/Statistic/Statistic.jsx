import React from 'react';
import T from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ label, value }) => (
  <p className={styles.text}>
    {label}
    {label !== 'PositivePercentage:' ? (
      <span className={styles.textValue}>{value}</span>
    ) : (
      <span className={styles.textValue}>{value}&#37;</span>
    )}
  </p>
);

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.number.isRequired,
};
export default Statistic;
