import React, { useState, /*useEffect*/ } from 'react';

//Styles
import { Wrapper, Circle, ImageWrapper, Image, Projector} from './Background.styles';

//components
import Stars from '../Stars';

//resources
import IMG from '../../skull1.png';


const Background = ({ exit }) => {
  const [pointerPosition, setPointerPosition] = useState([window.innerWidth/2,window.innerHeight/2]);
  return (
      <Wrapper onMouseMove={(e)=>setPointerPosition([e.clientX,e.clientY])} >
        <Stars pointerPosition={pointerPosition}/>
    <Circle size='50vw' child='1' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}/>
        <Circle size='45vw' child='2' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}/>
        <Circle size='40vw' child='3' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}/>
        <Circle size='35vw' child='4' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}/>
        <Circle size='30vw' child='5' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}/>
        <Circle size='25vw' child='6' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}/>
        <Circle size='20vw' child='7' pointerPositionY={pointerPosition[1]} pointerPositionX={pointerPosition[0]} speed={2}>
          <ImageWrapper exit={exit}>
            <Image src={IMG} draggable="false" />
            <svg>
              <filter id="transmissionerror">
                <feColorMatrix type="saturate" values="0" in="SourceGraphic" result="colormatrix1" />
                <feColorMatrix type="matrix" values="0.95 0 0 0 0  0 0 0 0 0  0 0 0.4 0 0  0 0 0 1 0" in="colormatrix1" result="colormatrix2" />
                <feTurbulence type="turbulence" baseFrequency="0.002 0.008" numOctaves="2" seed="5" stitchTiles="noStitch" result="turbulence">
                  <animate attributeName="baseFrequency" from="0.002 0.008" to="0.002 0.01" dur="3500ms" repeatCount="indefinite" />
                  <animate attributeName="numOctaves" from="1" to="10" dur="750ms" repeatCount="indefinite" />
                  <animate attributeName="seed" from="1" to="100" dur="10s" repeatCount="indefinite" />
                </feTurbulence>
                <feColorMatrix type="saturate" values="30" in="turbulence" result="colormatrix3" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -15" in="colormatrix3" result="colormatrix4" />
                <feDisplacementMap in="colormatrix2" in2="colomatrix4" scale="15" xChannelSelector="R" yChannelSelector="A" result="displacementMap" />
              </filter>
            </svg>
          </ImageWrapper>
        </Circle>
      </Wrapper>
  );
};

export default Background;
