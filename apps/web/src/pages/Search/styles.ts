import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  > img {
    margin-bottom: 56px;

    @media (max-width: 860px) {
      margin-bottom: 40px;
      width: 250px;
    }
  }

  > .search-container {
    display: flex;

    > .search-input {
      width: 592px;
      margin-right: 32px;
    }

    @media (max-width: 860px) {
      flex-direction: column;

      > .search-input {
        width: 100%;
        margin: 0 0 14px 0;
      }

      > button {
        width: 100%;
      }
    }
  }
`;
