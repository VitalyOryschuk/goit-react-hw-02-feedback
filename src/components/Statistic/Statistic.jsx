import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value }) => (
  <p>
    {label}
    <span>{value}</span>
  </p>
);

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.number.isRequired,
};
export default Statistic;
