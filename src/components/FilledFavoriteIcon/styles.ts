import styled, { css } from 'styled-components';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

type FilledFavoriteIconType = {
  isComicCard?: boolean;
};

export const FilledFavoriteIconWrapper = styled.div`
  ${({ isComicCard }: FilledFavoriteIconType) => css`
    ${isComicCard &&
    css`
      position: absolute;
      top: 75px;
      right: 15px;
    `}
  `}
`;

export const FilledFavoriteIcon = styled(StarRoundedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    background: ${theme.colors.transparentWhite};
    border-radius: 50%;
    opacity: 1;
  `}
`;
