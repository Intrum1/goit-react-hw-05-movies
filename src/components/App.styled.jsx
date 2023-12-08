import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 428px) {
    max-width: 394px;
  }

  @media screen and (min-width: 768px) {
    max-width: 734px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1406px;
  }
`;
