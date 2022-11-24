import styled from 'styled-components';

export const SmallCircle1 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 500 - ${props.pointerPositionY}px / 500 + ${props.top}px`,
    left: `calc(50vw / 500 - ${props.pointerPositionX}px / 500 + ${props.left}px`,
  }
}))`
  position: absolute;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background: hsl(0 100% 100% / 0.2);
  animation: glow 0.1s infinite;
  @keyframes glow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
export const SmallCircle2 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 60 - ${props.pointerPositionY}px / 60 + ${props.top}px`,
    left: `calc(50vw / 60 - ${props.pointerPositionX}px / 60 + ${props.left}px`,
  }
}))`
  position: absolute;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: hsl(0 100% 100% / 0.3);
`;
export const SmallCircle3 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 300 - ${props.pointerPositionY}px / 300 + ${props.top}px`,
    left: `calc(50vw / 300 - ${props.pointerPositionX}px / 300 + ${props.left}px`,
  }
}))`
  position: absolute;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background: hsl(0 100% 100% / 0.4);
  animation: glow 0.5s infinite;
  @keyframes glow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;
