import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: center;
    background-color: ${theme.colors.black};
    position: relative;
    width: 100%;

    p {
      color: ${theme.colors.white};
      margin: 20px auto 0;
    }

    img {
      width: 20px;
      color: ${theme.colors.white};
    }

    a {
      color: inherit;
    }
  `}
`;
