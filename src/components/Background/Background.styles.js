import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: hsl(240 40% 20%);
  background: hsla(239, 50%, 10%, 1);
  background: linear-gradient(hsla(239, 50%, 15%, 1),hsla(239, 50%, 0%, 1));
  background: linear-gradient(hsla(0, 0%, 10%, 1),hsla(0, 0%, 0%, 1));
`;
export const Circle = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / (${props.speed} * 10) - ${props.pointerPositionY}px / (${props.speed} * 10) + 50vh - (${props.size} / 2))`,
    left: `calc(50vw / (${props.speed} * 10) - ${props.pointerPositionX}px / (${props.speed} * 10) + 25vw + 50vw - ${props.size} / 2)`
  }
}))`
  position: absolute;
  border-radius: 50%;
  background-color: hsl(0 100% 100% / 0.0${props => props.child});
  /*background: transparent;*/
  width: ${props => props.size};
  height: ${props => props.size};
  
`;

export const ImageWrapper = styled.div`
  img:nth-child(1) {
    filter: url(#transmissionerror);
  }

  img:nth-child(2) {
    filter: grayscale(100%) contrast(1000%);
    mix-blend-mode: multiply;
  }
  position: relative;
  ${props =>
    props.exit ?
      css`
          animation: imageexit 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: forwards;
        `
      : null
  };
  @keyframes imageexit {
    0% {
      position: relative;
      left: 0px;
    }
    100% {
      position: relative;
      left: 600px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  transform: scale(0.8);
`;

export const SmallCircle1 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 500 - ${props.pointerPositionY}px / 500 + ${props.top}`,
    left: `calc(50vw / 500 - ${props.pointerPositionX}px / 500 + ${props.left}`,
  }
}))`
  position: fixed;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background: hsl(0 100% 100% / 0.2);
`;
export const SmallCircle2 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 60 - ${props.pointerPositionY}px / 60 + ${props.top}`,
    left: `calc(50vw / 60 - ${props.pointerPositionX}px / 60 + ${props.left}`,
  }
}))`
  position: fixed;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: hsl(0 100% 100% / 0.3);
`;
export const SmallCircle3 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 300 - ${props.pointerPositionY}px / 300 + ${props.top}`,
    left: `calc(50vw / 300 - ${props.pointerPositionX}px / 300 + ${props.left}`,
  }
}))`
  position: fixed;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background: hsl(0 100% 100% / 0.4);
`;

export const Projector = styled.div`
  box-sizing: border-box;
  /*position: absolute;*/
  position: relative;
  top: 65vh;
  left: 10vh;
  background-color: hsl(239 50% 15% / 1);
  background: transparent;
  height: 3vh;
  width: 20vh;

  ::after {
    top: -1vh;
    position : absolute;
    border: 3px solid hsl(239 100% 5% / 1);
    content: '';
    width: calc(20vh - 3px);
    height: 1vh;
    background-color: hsl(321 100% 21% / 1);
    border-radius: 50%;
  }

  ::before {
    top: -70vh;
    left: -20vh;
    position: absolute;
    content: '';
    height: 70vh;
    width: 60vh;
    /*background: linear-gradient(hsl(321 100% 21% / 0.2),hsl(321 100% 21% / 0.5));*/
    background: linear-gradient(hsl(239 50% 15% / 0.2),hsl(321 100% 21% / 0.5));
    clip-path: polygon(0% 0%,33% 100%,67% 100%, 100% 0%);
  }
`;
