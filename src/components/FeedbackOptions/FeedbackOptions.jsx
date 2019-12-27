import React from 'react';
import T from 'prop-types';
import styles from './Feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.container}>
    <button className={styles.button} type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button
      className={styles.button}
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button className={styles.button} type="button" name="bad" onClick={onLeaveFeedback}>
      bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  // good: T.number.isRequired,
  // neutral: T.number.isRequired,
  // bad: T.number.isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
