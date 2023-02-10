import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  outline: 1px solid var(--border-gray-color);
  display: flex;
  align-items: center;

  :focus-within {
    outline-width: 2px;
    outline-color: var(--primary);
  }

  > img {
    margin: 0 9.69px 0 18px;
  }

  > input {
    height: 100%;
    width: 100%;
    font-size: 1.125rem;
    font-weight: 400;

    &,
    &::placeholder {
      color: var(--gray-dark);
    }
  }
`;
