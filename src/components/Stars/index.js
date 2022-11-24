/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';

import useInterval from '../../hooks/useInterval';

//styles
import { SmallCircle1, SmallCircle2, SmallCircle3 } from './Stars.styles';

//components
import Line from '../Line';

const Stars = ({ pointerPosition }) => {

  const [rand, setRand] = useState([]);
  //const [container, setContainer] = useState([[],[],[],[]]);
  const [container1, setContainer1] = useState([]);
  const [container2, setContainer2] = useState([]);
  const [container3, setContainer3] = useState([]);
  const [container4, setContainer4] = useState([]);
  const [active, setActive] = useState(0);
  const [lines, setLines] = useState([{}, {}, {}, {}]);
  // eslint-disable-next-line
  const [exit1, setExit1] = useState(false);
  // eslint-disable-next-line
  const [exit2, setExit2] = useState(false);
  // eslint-disable-next-line
  const [exit3, setExit3] = useState(false);
  // eslint-disable-next-line
  const [exit4, setExit4] = useState(false);

  let ref = useRef([]);
  let noOfPoints = 80;

  useEffect(() => {
    let newRand = [];
    (Array.from({ length: noOfPoints }, (_, i) => i)).forEach((i) => {
      newRand.push([0, 0]);
      newRand[i][0] = Math.floor(Math.random() * window.innerHeight);
      newRand[i][1] = Math.floor(Math.random() * window.innerWidth);
    })
    newRand.sort((a, b) => (
      ((a[0] + a[1]) - (b[0] + b[1]))
    ));
    setRand(newRand);
  }, []);


  const generateLines = (i) => {
    let newLines = lines.slice();
    //let newContainer = container.slice();
    let newContainer = eval(`container${i + 1}.slice()`);
    if (!lines[i].currentPoint) {
      newLines[i].currentPoint = Math.floor(Math.random() * noOfPoints);
    }
    if (newLines[i].lineLength > 7) {
      newLines[i].lineActive = false;
      setActive(active - 1);
      newLines[i].lineLength = 0;
      newContainer = [];
    }
    else if (newLines[i].lineActive) {


      //disappear line
      if ((newLines[i].lineLength > 4 && Math.random() * 100 < 90) || newLines[i].lineLength === 7) {
        newLines[i].lineActive = false;
        setActive(active - 1);
        newLines[i].lineLength = 0;
        // eslint-disable-next-line
        eval(`setExit${i + 1}(true)`);
      }
      else {
        //create new line
        let j = Math.floor(Math.random() * 20);
        /*if(Math.floor(Math.random()*100) < 50) j = j+newLines[i].currentPoint;
        else  j = j-parseInt(newLines[i].currentPoint);
        if( j < 0 ) j = 10+Math.floor(Math.random()*5)
        if( j >= noOfPoints ) j = noOfPoints-10-Math.floor(Math.random()*5)*/
        if (i % 2 == j) j + newLines[i].currentPoint;
        else j - newLines[i].currentPoint;
        newContainer.push({ first: newLines[i].currentPoint, second: j });
        newLines[i].currentPoint = j;
        newLines[i].lineLength = newLines[i].lineLength + 1;
      }
    }
    else {
      if (Math.random() * 100 < 10 && active < 2) {
        newLines[i].lineActive = true;
        setActive(active + 1);
        newLines[i].lineLength = 0;
        newContainer = [];
      }
    }
    //setContainer(newContainer);
    eval(`setContainer${i + 1}(newContainer)`);
    setLines(newLines);
  }

  useInterval(() => generateLines(0), 1000);
  useInterval(() => generateLines(1), 1000);
  useInterval(() => generateLines(2), 1000);
  useInterval(() => generateLines(3), 1000);

  return (
    <div onClick={() => setInterval(() => generateLines(0), 3000)}>
      {rand.length > 0 && (Array.from({ length: noOfPoints }, (_, i) => i)).map((i) => (
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
      {(Array.from({ length: 4 }, (_, i) => i)).map((i) => {
        // eslint-disable-next-line
        eval(`exit${i + 1}`) === true && setTimeout(() => {
          let newContainer = eval(`container${i + 1}.slice()`);
          newContainer = [];
          //setContainer(newContainer);
          eval(`setContainer${i + 1}(newContainer)`);
          // eslint-disable-next-line
          eval(`setExit${i + 1}(false)`);
        }, 900)
        let element = eval(`container${i + 1}`);
        return (
          element.map((item, index) => (
            <Line
              y={ref.current[item.first]?.getBoundingClientRect().y}
              x={ref.current[item.first]?.getBoundingClientRect().x}
              y1={ref.current[item.second]?.getBoundingClientRect().y}
              x1={ref.current[item.second]?.getBoundingClientRect().x}
              key={index}
              exit={eval(`exit${i + 1}`)}
            />
          )))
      })}
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y + 30 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x + 30 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y - 30 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x + 30 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y + 30 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x - 30 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y - 30 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x - 30 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y + 0 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x + 30 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y + 30 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x + 0 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y - 30 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x + 0 : 0}
        opacity={0.1}
      />
      <Line
        y={ref.current[1]?.getBoundingClientRect().y}
        x={ref.current[1]?.getBoundingClientRect().x}
        y1={typeof ref.current[1]?.getBoundingClientRect().y !== NaN ? ref.current[1]?.getBoundingClientRect().y - 0 : 0}
        x1={typeof ref.current[1]?.getBoundingClientRect().x !== NaN ? ref.current[1]?.getBoundingClientRect().x - 30 : 0}
        opacity={0.1}
      />
    </div>
  );
}

export default Stars;
