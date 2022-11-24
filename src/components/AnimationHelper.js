import React from 'react';

import {motion} from 'framer-motion';
const AnimationHelper = () => {
    <motion.div
      style={{backgroundColor: 'hsl(240 15% 15%)',width: '100vw', height: '100vh', position: 'fixed' }}
      initial={{left: '100vw'}}
      animate={{left: '100vw'}}
      exit={{
        left: '0vh'
      }}
    />
};
export default AnimationHelper;
