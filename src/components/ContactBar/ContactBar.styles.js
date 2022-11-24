import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 3rem;
  margin: 1rem;
  animation: small 0.1s ease-out;
  animation-fill-mode: forwards;
  position: relative;
  @keyframes enlarge {
    100% {
      transform: scale(1.5);
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  @keyframes small {
    0% {
      transform: scale(1.5);
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    100% {
      transform: scale(1);
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  ${props => 
      props.exit ?
        css `
          animation: elementexit 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: forwards;
        `
        : css `
          :hover {
            animation: enlarge 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            animation-fill-mode: forwards;
          }
        `
  };
  @keyframes elementexit {
    0% {
      position: relative;
      left: 0px;
    }
    100% {
      position: relative;
      left: 80px;
    }
  }
`;
