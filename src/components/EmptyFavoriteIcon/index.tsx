import * as S from './styles';

export type EmptyFavoriteIconProps = {
  onClick: () => void;
  isComicCard?: boolean;
};

export const EmptyFavoriteIcon = ({
  onClick,
  isComicCard,
}: EmptyFavoriteIconProps) => {
  return (
    <div>
      <S.EmptyFavoriteIconWrapper onClick={onClick} isComicCard={isComicCard}>
        <S.EmptyFavoriteIcon fontSize='large' />
      </S.EmptyFavoriteIconWrapper>
    </div>
  );
};
