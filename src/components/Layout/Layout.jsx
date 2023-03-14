import PropTypes from 'prop-types';
import { LayoutContainer } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
