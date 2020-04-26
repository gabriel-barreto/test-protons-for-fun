import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import SEO from '../SEO';

import * as S from './styled';

function Layout({ children, title }) {
  return (
    <S.LayoutWrapper>
      <SEO title={title} />
      <Navbar />
      <S.LayoutContent>{children}</S.LayoutContent>
    </S.LayoutWrapper>
  );
}

Layout.defaultProps = { title: '' };
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
