import React from 'react';
import { useLocation } from 'react-router-dom';

import brand from '../../assets/Brand.png';

import { links } from './content';
import * as S from './styled';

function Navbar() {
  const location = useLocation();

  return (
    <S.Navbar>
      <S.Brand alt="logoipsum" src={brand} title="logoipsum" />
      <S.Nav>
        {links.map(({ activeCondition, label, subpath }) => (
          <S.NavItem key={subpath}>
            <S.NavLink
              className={activeCondition(location.pathname) ? '--active' : ''}
              to={`${subpath}`}
            >
              {label}
            </S.NavLink>
          </S.NavItem>
        ))}
      </S.Nav>
    </S.Navbar>
  );
}

export default Navbar;
