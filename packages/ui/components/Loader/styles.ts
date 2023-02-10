import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2;
  background-color: var(--white);

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: var(--primary);
    border-radius: 50%;
    -webkit-animation: loader-4-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-4-1 {
    0% {
      -webkit-transform: scale(0);
      opacity: 0;
    }
    50% {
      -webkit-transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      opacity: 0;
    }
  }
  @keyframes loader-4-1 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    -webkit-animation: loader-4-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-4-2 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loader-4-2 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  > span::before,
  > span::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 12px;
    width: 12px;
    background: var(--primary);
    border-radius: 50%;
    -webkit-animation: loader-4-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-4-3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(-16px, 0, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-4-3 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(-16px, 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  > span::after {
    -webkit-animation: loader-4-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-4-4 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(16px, 0, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-4-4 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(16px, 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
`;
