import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import brand from '../../assets/Brand.png';

import { links } from './content';
import * as S from './styled';

function Navbar() {
  const location = useLocation();
  const { userId: activeUser } = useParams();

  return (
    <S.Navbar>
      <S.NavbarBrand alt="logoipsum" src={brand} title="logoipsum" />
      <S.NavbarNav>
        {links.map(({ activeCondition, label, subpath }) => (
          <S.NavItem key={subpath}>
            <S.NavLink
              className={activeCondition(location.pathname) ? '--active' : ''}
              to={`${activeUser}/${subpath}`}
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
