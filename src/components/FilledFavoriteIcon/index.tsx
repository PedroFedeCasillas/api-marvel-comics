import * as S from './styles';

export type FilledFavoriteIconProps = {
  onClick: () => void;
  isComicCard?: boolean;
};

export const FilledFavoriteIcon = ({
  onClick,
  isComicCard,
}: FilledFavoriteIconProps) => {
  return (
    <S.FilledFavoriteIconWrapper onClick={onClick} isComicCard={isComicCard}>
      <S.FilledFavoriteIcon fontSize='large' />
    </S.FilledFavoriteIconWrapper>
  );
};
