import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkest.hex()};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  padding: 3.2rem 6.4rem;
  width: 100%;
`;

export const Brand = styled.img`
  align-items: center;
  display: flex;
  height: 4.8rem;
  object-fit: fill;
  object-position: center;
  width: auto;
`;

export const Nav = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: 100%;
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
