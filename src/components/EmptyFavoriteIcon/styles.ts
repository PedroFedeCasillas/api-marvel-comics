import styled, { css, DefaultTheme } from 'styled-components';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

type EmptyFavoriteIconType = {
  theme: DefaultTheme;
  isComicCard?: boolean;
};

export const EmptyFavoriteIconWrapper = styled.div`
  ${({ theme, isComicCard }: EmptyFavoriteIconType) => css`
    ${isComicCard &&
    css`
      position: absolute;
      top: 75px;
      right: 15px;

      svg {
        opacity: 0;
      }

      ${theme.isMobile &&
      css`
        svg {
          opacity: 1;
        }
      `}
    `}
  `}
`;

export const EmptyFavoriteIcon = styled(StarBorderRoundedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    background: ${theme.colors.transparentWhite};
    border-radius: 50%;
  `}
`;
