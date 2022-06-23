import React, {useState, useEffect} from 'react'

//Pages

//Components
import AnimatedRoutes from './components/AnimatedRoutes';

//Router
import {BrowserRouter as Router} from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';


const App = () => {
  return (
    <Router>
      <AnimatedRoutes/>
      <GlobalStyle />
    </Router>
  );
}

export default App;
