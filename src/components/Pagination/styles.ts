import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin: 10% auto 0;

  @media (max-width: 500px) {
    ul {
      margin-top: 25px;
    }

    button {
      min-width: 30px;
      padding: 0;
      margin: 0;
    }
  }
`;
