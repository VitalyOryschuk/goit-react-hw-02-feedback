import React from 'react';
import T from 'prop-types';
import Statistic from '../Statistic/Statistic';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    {good || neutral || bad ? (
      <div>
        <Statistic label="Good:" value={good} />
        <Statistic label="Neutral:" value={neutral} />
        <Statistic label="Bad:" value={bad} />
        <Statistic label="Total:" value={total} />
        <Statistic label="PositivePercentage:" value={positivePercentage} />
      </div>
    ) : (
      <Notification message="No feedback given" />
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
