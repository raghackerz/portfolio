import React, { useState, useEffect, useRef} from 'react';

import useInterval from '../../hooks/useInterval';

//styles
import { SmallCircle1, SmallCircle2, SmallCircle3, Line, AnimLine } from './Stars.styles';

const Stars = ({pointerPosition}) => {

  const [rand,setRand] = useState([]);
  const [container, setContainer] = useState([[],[],[],[]]);
  const [lines,setLines] = useState([{},{},{},{}]);
  const [exit1, setExit1] = useState(false);
  const [exit2, setExit2] = useState(false);
  const [exit3, setExit3] = useState(false);
  const [exit4, setExit4] = useState(false);

  let ref = useRef([]);

  useEffect(() => {
    let newRand = [];
    (Array.from({length: 100}, (_, i) => i)).forEach((i)=>{
      newRand.push([0,0]);
      newRand[i][0] = Math.floor(Math.random() * window.innerHeight);
      newRand[i][1] = Math.floor(Math.random() * window.innerWidth);
    })
    newRand.sort((a,b) => (
      ((a[0]+a[1]) - (b[0] + b[1]))
    ));
    setRand(newRand);
  }, [] );


  const generateLines = (i) => {
    let newLines = lines.slice();
    let newContainer = container.slice();
    if(!lines[i].currentPoint) {
      newLines[i].currentPoint = Math.floor(Math.random()*100);
    }
    if(newLines[i].lineLength > 7) {
      newLines[i].lineActive = false;
      newLines[i].lineLength = 0;
      newContainer[i] = [];
    }
    else if(lines[i].lineActive) {

      
      //disappear line
      if((newLines[i].lineLength > 4 && Math.random()*100 < 90) || newLines[i].lineLength === 7) {
        newLines[i].lineActive = false;
        newLines[i].lineLength = 0;
        eval(`setExit${i+1}(true)`);
      }
      else {
        //create new line
        let j = Math.floor(Math.random()*20);
        console.log(j);
        if(Math.floor(Math.random()*100) < 50) j = j+lines[i].currentPoint;
        else  j = j-parseInt(lines[i].currentPoint);
        console.log(j);
        if( j < 0 ) j = 10+Math.floor(Math.random()*5)
        if( j >= 100 ) j = 90-Math.floor(Math.random()*5)
        newContainer[i].push({first: newLines[i].currentPoint, second: j});
        newLines[i].currentPoint = j;
        newLines[i].lineLength = newLines[i].lineLength+1;
      }
    }
    else {
      if(Math.random()*100 < 10) { 
        newLines[i].lineActive = true;
        newLines[i].lineLength = 0;
        newContainer[i] = [];
      }
    }
    setContainer(newContainer);
    setLines(newLines);
  }

  useInterval(() => generateLines(0), 1000);
  useInterval(() => generateLines(1), 1000);
  useInterval(() => generateLines(2), 1000);
  useInterval(() => generateLines(3), 1000);

  return (
    <div onClick={()=>setInterval(() => generateLines(0),3000)}>
      {rand.length > 0 && (Array.from({length: 100}, (_, i) => i)).map((i)=>(
        i % 3 === 1 ? 
        <SmallCircle1 
          key={i} 
          top={rand[i][0]} 
          left={rand[i][1]} 
          pointerPositionY={pointerPosition[1]} 
          pointerPositionX={pointerPosition[0]} 
          ref={el => ref.current[i] = el}
        /> : i % 3 === 2 ? 
        <SmallCircle2 
          key={i} 
          top={rand[i][0]} 
          left={rand[i][1]} 
          pointerPositionY={pointerPosition[1]} 
          pointerPositionX={pointerPosition[0]} 
          ref={el => ref.current[i] = el}
        /> : 
        <SmallCircle3 
          key={i} 
          top={rand[i][0]} 
          left={rand[i][1]} 
          pointerPositionY={pointerPosition[1]} 
          pointerPositionX={pointerPosition[0]} 
          ref={el => ref.current[i] = el}
        />
      ))}
    {container.map((element,i) => {
      eval(`exit${i+1}`) == true && setTimeout(()=> {
        let newContainer = container.slice();
        newContainer[i] = [];
        setContainer(newContainer);
        eval(`setExit${i+1}(false)`);
      }, 1000) 
      return (
        element.map((item,index) => (
          <Line 
            y={ref.current[item.first]?.getBoundingClientRect().y} 
            x={ref.current[item.first]?.getBoundingClientRect().x} 
            y1={ref.current[item.second]?.getBoundingClientRect().y} 
            x1={ref.current[item.second]?.getBoundingClientRect().x}
            key = {index}
          >
            <AnimLine exit={eval(`exit${i+1}`)}/>
          </Line>
        )))})}
    </div>
  );
}

export default Stars;
