import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  --size: 200px;
  --duration: 0.5s;
  /*--delay: 10s;*/
  position: fixed;
  top: 0;
  background-color: hsl(240,15%,15%);
  width: 100vw;
  height: 100vh;
  z-index: 2;

  animation: entry var(--duration) cubic-bezier(.01,1.18,.38,.98);

  ${props =>
    props.exit ?
      css`
        animation: exit var(--duration) ease-in-out;
        animation-fill-mode: forwards;
      ` :
      css`
        animation: entry var(--duration) cubic-bezier(.01,1.18,.38,.98);
      `};

@keyframes entry {
  0% {
    left: 100vw;
  }
  100% {
    left: 0vw;
  }
}
@keyframes exit {
  0% {
    left: 0vw;
  }
  100% {
    left: -100vw;
  }
}
@media (max-width: 768px) {
  --size: 120px;
}
`;

export const Spinner = styled.div`

  display: block;
  position: absolute;
  top: calc(50% - var(--size) / 2);
  left: calc(50% - var(--size) / 2);
  height: var(--size);
  width: var(--size);
  margin: -25px 0 0 -25px;
  border: 2px solid transparent;
  border-top-color: #FFF;
  box-shadow: 0 0 5px #FFFFFF;
  border-radius: 50%;
  -webkit-animation: spin 1.5s ease infinite;
          animation: spin 1.5s ease infinite;
    /*animation-delay: var(--delay);*/

:before {
  content: "";
  position: absolute;
  top: calc(var(--size)/6);
  right: calc(var(--size)/6);
  bottom: calc(var(--size)/6);
  left: calc(var(--size)/6);
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: #FFF;
  box-shadow: 0 0 5px #FFFFFF;
  -webkit-animation: spin_x 1s linear infinite;
          animation: spin_x 1s linear infinite;
    /*animation-delay: var(--delay);*/
}

:after {
  content: "";
  position: absolute;
  top: calc(var(--size)*30/100);
  right: calc(var(--size)*30/100);
  bottom: calc(var(--size)*30/100);
  left: calc(var(--size)*30/100);
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: #FFF;
  box-shadow: 0 0 5px #FFFFFF;
  -webkit-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite;
    /*animation-delay: var(--delay);*/
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@-webkit-keyframes spin_x {
  0% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
  }
  100% {
    -webkit-transform: rotateX(360deg);
            transform: rotateX(360deg);
  }
}
@keyframes spin_x {
  0% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
  }
  100% {
    -webkit-transform: rotateX(360deg);
            transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
            transform: rotateX(360deg);
  }
}
`;
export const Image = styled.img`
`;
