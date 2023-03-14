import PropTypes from 'prop-types';
import { Button, Block } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Block>
      {options.map((option, index) => (
        <Button key={index} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </Block>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
