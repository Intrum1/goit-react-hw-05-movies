import { useTheme } from '@emotion/react';
import { Container } from '../App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import { FaFlagUsa } from 'react-icons/fa';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <FaFlagUsa size="40px" color={theme.colors.light} />
            <LinkWrapper>
              <NavLinkStyled to={routes.Home}>Home</NavLinkStyled>
              <NavLinkStyled to={routes.Movies}>Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
