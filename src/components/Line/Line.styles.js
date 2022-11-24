import styled, { css } from 'styled-components';

export const LineContainer = styled.div.attrs(props => ({
  style: {
    top: props.y,
    left: props.x,
    width: Math.pow(Math.pow(props.x - props.x1, 2) + Math.pow(props.y - props.y1, 2), 0.5) + 'px',
    transform: ((props.x < props.x1) ? 'rotate(' + (Math.atan((props.y - props.y1) / (props.x - props.x1))) + 'rad)'
      : 'rotate(' + (3.141593 + Math.atan((props.y - props.y1) / (props.x - props.x1))) + 'rad)'),
  },
}))`
  position: absolute;
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
    css`
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
  ${props =>
    props.opacity ?
      css`
            background-color: hsl(0 100% 100% / ${props.opacity});
        `
      : null
  }
`;
