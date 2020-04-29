import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import SEO from '../SEO';

import * as S from './styled';

function Layout({ children, title }) {
  return (
    <S.Layout>
      <SEO title={title} />
      <Navbar />
      <S.Container>{children}</S.Container>
    </S.Layout>
  );
}

Layout.defaultProps = { title: '' };
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
