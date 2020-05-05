import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { $breakpoints } from '../../utils';

export const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkest.hex()};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  padding: 2.4rem 3.2rem;
  width: 100%;
  z-index: 9;

  @media screen and (min-width: ${$breakpoints('md')}) {
    padding: 3.2rem 6.4rem;
  }
`;

export const Brand = styled.img`
  align-items: center;
  display: flex;
  height: 3.2rem;
  object-fit: fill;
  object-position: center;
  width: auto;

  @media screen and (min-width: ${$breakpoints('md')}) {
    height: 4.8rem;
  }
`;

export const Nav = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  left: 0;
  position: absolute;
  transform: translateX(-100%);
  top: 0;
  z-index: 9;

  @media screen and (min-width: ${$breakpoints('md')}) {
    left: auto;
    position: relative;
    top: auto;
    z-index: auto;
  }
`;

export const NavItem = styled.li`
  height: 100%;

  &:not(:last-of-type) {
    margin: 0 4rem 0 0;
  }
`;

const activeNavLink = css`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.bold};
`;
export const NavLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.colors.lightest.hex()};
  display: flex;
  font-size: 1.6rem;
  height: 100%;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  transition-duration: 400ms;
  transition-property: color, font-weight;
  will-change: color, font-weight;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.hex()};
  }
  &:active {
    color: ${({ theme }) => theme.colors.secondaryDark.hex()};
  }

  &.--active {
    ${activeNavLink};
    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight.hex()};
    }
    &:active {
      color: ${({ theme }) => theme.colors.secondaryDark.hex()};
    }
  }
`;
