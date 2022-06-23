import React from 'react';

//Animation
import { AnimatePresence } from 'framer-motion';

//Pages
import Main from '../pages/Main';
import Main1 from '../pages/Main1';

//Components
import LoadingScreen from './LoadingScreen';

//Route
import {Routes, Route, useLocation} from 'react-router-dom';

const AnimatedRoutes = () => {

  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main/>}/>
        <Route path='/main1' element={<Main1/>}/>
        <Route path='/loading' element={<LoadingScreen/>}/>
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
