import React from 'react';
import { Spinner } from './LoadingScreen.styles';

const LoadingScreen = () => {
  return (
      <Spinner>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
      </Spinner>
  );
}

export default LoadingScreen;
