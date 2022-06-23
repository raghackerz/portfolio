import React, { useState, useEffect } from 'react';

//Styles
//import {Wrapper, Image} from './Main.styles';


//Components
import LoadingScreen from '../../components/LoadingScreen';
import Background from '../../components/Background';
import Navbar from '../../components/Navbar';
import Icon from '../../components/Icon';
import ContactBar from '../../components/ContactBar';

//Navigation
//import {Link} from 'react-router-dom';

//Animation
import { motion } from "framer-motion";


const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>setLoading(false),500);
  },[]);

  const navigationElements = [{path: '/main1', name: 'Projects'}, {path: '/loading', name: 'Loading'}];

  return (
    <>
    <motion.div
      style={{backgroundColor: 'hsl(240 15% 15% / 0)', width: '100vw', height: '100vh', position: 'fixed' }}
      initial={{left: '100vw'}}
      animate={{left: '100vw'}}
      exit={{
        left: '0vw'
      }}
      transition = {{duration: 0.5,}}
    />
    {!loading &&
      <div onWheel={(event) => console.log(event.deltaX + " " + event.deltaY)} >
        <Background />
        <Navbar elements={navigationElements} />
        <Icon />
        <ContactBar />
      </div>
    }
    <LoadingScreen onClick={()=>{setLoading(false)}} loading={loading} />
    </>
  );
};
export default Main;
