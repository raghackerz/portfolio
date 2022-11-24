import React, { useState, useEffect } from 'react';

//Styles
import { Wrapper } from './Main.styles';

//Components
import LoadingScreen from '../../components/LoadingScreen';

//Navigation
import {Link} from 'react-router-dom';

import { motion } from "framer-motion";

const Main1 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>setLoading(false),500);
  },[]);

  return (
    <>
    <motion.div
      style={{backgroundColor: 'hsl(240 15% 15%)',width: '100vw', height: '100vh', position: 'fixed' }}
      initial={{left: '100vw'}}
      animate={{left: '100vw'}}
      exit={{
        left: '0vw'
      }}
      transition = {{duration: 0.5,}}
    />
    {!loading &&
      <Link to='/'>
      <Wrapper/>
      </Link>
    }
    <LoadingScreen onClick={()=>{setLoading(false)}} loading={loading}/>
    </>
  );
};
export default Main1;

