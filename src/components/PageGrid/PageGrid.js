import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function PageGrid({ children }) {
  return <S.Grid>{children}</S.Grid>;
}

PageGrid.defaultProps = { children: null };
PageGrid.propTypes = { children: PropTypes.node };

export default PageGrid;
