import styled from 'styled-components';

export const Container = styled.a`
  padding: 24px 24px 16px;
  width: 100%;
  border-bottom: 1px solid var(--border-gray-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--black);
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
  }

  > .info {
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
      width: 24px;
      height: 24px;
    }

    > span {
      height: 4px;
      width: 4px;
      border-radius: 50%;
      background-color: var(--gray);
    }

    > p {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--gray);
    }
  }
`;
