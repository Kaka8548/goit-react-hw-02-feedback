import { BtnsWrapper, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ handleClick }) {
  return (
    <BtnsWrapper onClick={handleClick}>
      <Btn type="button">Good</Btn>
      <Btn type="button">Neutral</Btn>
      <Btn type="button">Bad</Btn>
    </BtnsWrapper>
  );
}

FeedbackOptions.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
