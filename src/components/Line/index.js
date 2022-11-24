import React from 'react';

import { LineContainer, AnimLine } from './Line.styles';

const Line = ({ x, y, x1, y1, exit, opacity }) => {
  return (
    <LineContainer
      x={x}
      y={y}
      x1={x1}
      y1={y1}
    >
      <AnimLine exit={exit} opacity={opacity} />
    </LineContainer>
  );
}

export default Line;
