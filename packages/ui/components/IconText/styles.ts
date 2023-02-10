import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 24px;
    height: 24px;
  }

  > p {
    margin-left: 11px;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--gray);
  }
`;
