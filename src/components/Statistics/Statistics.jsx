import React from 'react';
import T from 'prop-types';
import Statistic from '../Statistic/Statistic';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2 className={styles.title}>Statistics</h2>
    {!good && !neutral && !bad ? (
      <Notification message="No feedback given!" />
    ) : (
      <div className={styles.container}>
        <Statistic label="Good:" value={good} />
        <Statistic label="Neutral:" value={neutral} />
        <Statistic label="Bad:" value={bad} />
        <Statistic label="Total:" value={total} />
        <Statistic label="PositivePercentage:" value={positivePercentage} />
      </div>
    )}
  </div>
);

Statistics.propTypes = {
  good: T.number.isRequired,
  neutral: T.number.isRequired,
  bad: T.number.isRequired,
  total: T.number.isRequired,
  positivePercentage: T.number.isRequired,
};

export default Statistics;
