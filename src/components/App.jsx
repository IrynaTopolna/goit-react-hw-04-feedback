import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import Layout from './Layout';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor() {
    super();
    this.addFeedback = this.addFeedback.bind(this);
  }

  addFeedback(option) {
    this.setState({
      [option]: this.state[option] + 1,
    });
  }

  countTotalFeedback = () => {
    const data = this.state;
    return data.good + data.neutral + data.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const data = this.state;

    return Number(((data.good / this.countTotalFeedback()) * 100).toFixed(0));
  };

  render() {
    const data = this.state;
    const options = Object.keys(data);
    const haveFeedback = data.good > 0 || data.neutral > 0 || data.bad > 0;

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {haveFeedback ? (
            <Statistics
              good={data.good}
              neutral={data.neutral}
              bad={data.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyles />
      </Layout>
    );
  }
}
