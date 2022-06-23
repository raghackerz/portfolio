import React from 'react';

import { Wrapper, Image } from './Icon.styles';

//Resources
import IMG from '../../hackerlight.png';

const Icon = () => {
  return (
    <Wrapper>
      <Image src={IMG} draggable="false" />
    </Wrapper>
  );
}

export default Icon;
