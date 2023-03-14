import PropTypes from 'prop-types';
import { Block, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Block>
      <Title>{title}</Title>
      <>{children}</>
    </Block>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
