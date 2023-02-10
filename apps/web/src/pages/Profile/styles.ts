import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: var(--background-light);

  > .navbar {
    display: flex;
    padding: 20px 112px;

    > .search-actions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-left: 119px;

      > .search-input {
        margin-right: 32px;
      }
    }

    @media (max-width: 1100px) {
      flex-direction: column;

      > .search-actions {
        margin: 14px 0;
      }
    }

    @media (max-width: 769px) {
      padding: 20px 40px;

      > .search-actions {
        flex-direction: column;

        > .search-input {
          margin: 0 0 14px 0;
        }

        > button {
          width: 100%;
        }
      }
    }

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  > .error {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
  }

  > .user-data {
    display: flex;
    padding: 100px 112px 56px;
    gap: 32px;

    > .card-container {
      > .card {
        max-width: 280px;
      }

      > a > button {
        margin-top: 40px;
      }
    }

    @media (max-width: 1100px) {
      padding: 20px 112px 56px;
      flex-direction: column;
      > .card-container {
        > .card {
          max-width: 100%;
        }
      }
    }

    @media (max-width: 769px) {
      padding: 20px 40px 56px;
    }
    @media (max-width: 480px) {
      padding: 20px 20px 56px;
    }
  }
`;
