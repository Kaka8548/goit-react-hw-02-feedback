import { Component } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import { countPositiveFeedbackPercentage, countTotalFeedback } from 'utils';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    event.preventDefault();
    const stateName = event.target.innerHTML.toLowerCase();

    this.setState(prevState => ({ [stateName]: prevState[stateName] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(total, good);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options
            handleClick={this.onBtnClick}
          ></FeedbackOptions>
        </Section>
        <Section title="">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
