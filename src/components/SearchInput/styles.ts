import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    height: 50px;
    width: 100%;
    padding-left: 24px;
    font-size: 16px;
    outline: none;
    font-family: ${theme.font.robotoCondensed};

    @media (max-width: 750px) {
      padding-left: 8px;
      font-size: 14px;
    }
  `}
`;

export const AutoComplete = styled.div`
  ${({ theme }) => css`
    background: white;
    border: 1px solid grey;
    width: 100%;
    height: 200px;
    position: absolute;
    overflow-y: scroll;
    z-index: 1;
    font-family: ${theme.font.robotoCondensed};
    font-size: 16px;

    p {
      padding: 8px 24px;
      cursor: pointer;

      &:hover {
        background: ${theme.colors.grey};
      }
      @media (max-width: 750px) {
        padding-left: 8px;
        font-size: 14px;
      }
    }
  `}
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
