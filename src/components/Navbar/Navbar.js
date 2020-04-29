import React from 'react';
import { useLocation } from 'react-router-dom';

import brand from '../../assets/Brand.png';

import { links } from './content';
import * as S from './styled';

function Navbar() {
  const location = useLocation();

  return (
    <S.Navbar>
      <S.NavbarBrand alt="logoipsum" src={brand} title="logoipsum" />
      <S.NavbarNav>
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
      </S.NavbarNav>
    </S.Navbar>
  );
}

export default Navbar;
