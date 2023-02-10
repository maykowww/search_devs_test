import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  padding: 26px 16px 26px;
  border-radius: 4px;
  background-color: var(--white);

  > .profile-avatar-name {
    display: flex;
    margin-bottom: 16px;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 16px;
    }

    > .name-tag {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      > h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--black);
        margin-bottom: 4px;
      }

      > p {
        font-size: 0.875rem;
        color: var(--gray-light);
      }
    }
  }

  > .bio {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
    margin-bottom: 25px;
  }

  .icons {
    display: flex;
    flex-direction: column;
    gap: 11px;

    .divider {
      height: 16px;
      width: 100%;
    }

    a[href] {
      &:hover {
        p {
          color: var(--primary);
          border-color: var(--primary);
        }
      }
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid var(--gray-dark);
      }
    }
  }
`;
