import styled, { css } from 'styled-components';

export const ComicDetailsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 1240px;
    padding: 20px;
    margin: 60px auto 0;
    min-height: 100vh;

    a {
      color: inherit;
      margin-top: 20px;
      display: block;

      &:hover {
        color: ${theme.colors.lightRed};
      }
    }
  `}
`;

export const ComicDetails = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 50px;
    padding: 50px 0;

    img {
      max-width: 350px;
    }

    h1,
    h2 {
      font-family: ${theme.font.robotoCondensed};
      text-transform: capitalize;
    }

    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 20px;
      margin-top: 20px;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 400px) {
      img {
        width: 100%;
      }
    }
  `}
`;

export const CreatorsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ComicDetailsHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const ImageContainer = styled.div`
  @media (max-width: 800px) {
    margin: auto;
  }
`;
