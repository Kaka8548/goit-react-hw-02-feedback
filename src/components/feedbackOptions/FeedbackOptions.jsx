import { BtnsWrapper, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <BtnsWrapper>
      {options.map(option => {
        const btnId = nanoid();

        return (
          <Btn key={btnId} type="button" onClick={() => handleClick(option)}>
            {option}
          </Btn>
        );
      })}
    </BtnsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
