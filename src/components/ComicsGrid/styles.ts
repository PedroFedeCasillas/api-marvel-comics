import styled, { css } from 'styled-components';

export const ComicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTextBox = styled.div`
  ${({ theme }) => css`
    margin: 10% auto;
    p {
      font-family: ${theme.font.robotoCondensed};
      font-weight: ${theme.font.bold};
      letter-spacing: 1px;
      font-size: 24px;
    }
  `}
`;
