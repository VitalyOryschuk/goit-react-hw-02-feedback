import React from 'react';
import T from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
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
