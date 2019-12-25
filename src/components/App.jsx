import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    console.log(this.state[name]);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = Number(this.countPositiveFeedbackPercentage());
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
