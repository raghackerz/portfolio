import React, { useState, useEffect } from 'react';
import { Wrapper, Spinner, Image } from './LoadingScreen.styles';

/*const LoadingScreen = ({onClick}) => {
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div
      key={onClick}
      style={{position: 'fixed'}}
      initial={{left: '100vw'}}
      animate={{left: '0vw'}}
      exit={{left: '-100vw'}}
      transition = {{delay: 0.5}}
    >
      <Wrapper>
      <Spinner onClick={onClick}/>
      </Wrapper>
    </motion.div>
    </AnimatePresence>
  );
}*/
const LoadingScreen = ({onClick, loading}) => {
  const [req, setReq] = useState(true);
  const [exit,setExit] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const delay = 500;
  const wait = 200;
  useEffect(() => {
    if(!loading) {
      setTimeout(()=>{setExit(true)},wait,'funky');
      setTimeout(()=>{setReq(false)},2*delay+wait,'funky');
    }
  },[loading]);

  useEffect(() => {
    setTimeout(()=>{setShowSpinner(true)},1000+delay,'funky');
  },[]);

  if(!req) {
    return (<></>);
  }
  
  return (
      <Wrapper exit={exit}>
        {showSpinner && 
          <Spinner onClick={onClick}/>
        }
      </Wrapper>
  );
}

export default LoadingScreen;
