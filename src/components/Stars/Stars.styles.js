import styled, { css } from 'styled-components';

export const SmallCircle1 = styled.div.attrs(props => ({
  style: {
    top: `calc(50vh / 500 - ${props.pointerPositionY}px / 500 + ${props.top}px`,
    left: `calc(50vw / 500 - ${props.pointerPositionX}px / 500 + ${props.left}px`,
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
    top: `calc(50vh / 60 - ${props.pointerPositionY}px / 60 + ${props.top}px`,
    left: `calc(50vw / 60 - ${props.pointerPositionX}px / 60 + ${props.left}px`,
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
    top: `calc(50vh / 300 - ${props.pointerPositionY}px / 300 + ${props.top}px`,
    left: `calc(50vw / 300 - ${props.pointerPositionX}px / 300 + ${props.left}px`,
  }
}))`
  position: fixed;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background: hsl(0 100% 100% / 0.4);
`;

export const Line = styled.div.attrs(props => ({
  style: {
    top: props.y,
    left: props.x,
    width: Math.pow(Math.pow(props.x - props.x1,2) + Math.pow(props.y - props.y1,2),0.5) + 'px',
    transform: ((props.x < props.x1) ? 'rotate(' + (Math.atan((props.y-props.y1)/(props.x-props.x1)))+'rad)'
      : 'rotate(' + (3.141593 + Math.atan((props.y-props.y1)/(props.x-props.x1)))+'rad)'),
  },
}))`
  position: fixed;
  height: 3px;
  transform-origin: left;
`;
export const AnimLine = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(0 100% 100% / 0.05);
  transform-origin: left;
  animation: draw 1s linear;
  animation-fill-mode: forwards;
  ${props => 
      (props.exit === true) && 
        css `
          animation: lineexit 1s linear;
        `
  }
  @keyframes draw {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
  @keyframes lineexit {
    100% {
      opacity: 0;
    }
  }
`;
