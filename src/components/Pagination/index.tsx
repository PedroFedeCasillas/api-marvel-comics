import { Pagination } from '@mui/material';

import * as S from './styles';

type PaginationProps = {
  count: number;
  onChange: (e: any) => void;
  page: number;
};

export const CustomPagination = ({
  count,
  onChange,
  page,
}: PaginationProps) => {
  return (
    <S.PaginationWrapper>
      <Pagination count={count} onChange={onChange} page={page} />
    </S.PaginationWrapper>
  );
};
