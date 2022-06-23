import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
export const Image = styled.img`
  width: 5rem;
  margin: 1rem;
  :hover {
    animation-name: jitter;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-play-state: paused;

    animation-direction: forward;
    animation-play-state: running;
  }

  @keyframes jitter {
    0% {
      transform: skew(0deg) translate(0px, 0px);
    }
    17% {
      transform: skew(0.5deg) translate(-2px, 0px);
    }
    32% {
      transform: skew(0.5deg) translate(0px, 0px);
    }
    48% {
      transform: skew(0deg) translate(0px, 0px);
    }
    63% {
      transform: skew(-0.5deg) translate(2px, 0px);
    }
    79% {
      transform: skew(-0.5deg) translate(0px, 0px);
    }
    100% {
      transform: skew(0deg) translate(0px, 0px);
    }
  }
`;
