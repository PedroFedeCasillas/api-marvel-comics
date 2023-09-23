import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    height: 70px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 40%);
    align-items: center;
    background-color: ${theme.colors.black};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  `}
`;

export const StyledLink = styled(Link)`
  margin-left: 50px;
  display: flex;

  @media (max-width: 750px) {
    margin-left: 10px;
  }
`;

export const StyledFavoriteIcon = styled(StarRoundedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    margin: 0 50px 0 0;
    cursor: pointer;

    @media (max-width: 750px) {
      margin-right: 10px;
    }
  `}
`;

export const StyledForm = styled.form`
  width: 50%;
  display: flex;

  @media (max-width: 750px) {
    width: 70%;
  }
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    border: none;
    margin-left: 20px;
    height: 50px;
    background: ${theme.colors.red};
    color: ${theme.colors.white};
    font-family: ${theme.font.robotoCondensed};
    font-weight: ${theme.font.bold};
    font-size: 14px;
    padding: 0 35px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      border: 1px solid white;
    }

    @media (max-width: 750px) {
      padding: 0 8px;
      margin-left: 8px;
    }
  `}
`;
