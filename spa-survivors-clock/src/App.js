import React, {useEffect, useState} from 'react';
import moment from 'moment'; 
import "moment-timezone";
import './App.css';

function App() {
  return (
    <div className="App">
      <Board citiesObj = {[ 
      {city:'Stockholm', region:'Europe'},
      {city:'London', region:'Europe'},
      {city:'Tehran', region:'Asia'}]}/>
    </div>
  );
}

function Board(props) {
  return (
    <div className="Board">
      <Clock cityObj={props.citiesObj[0]}/>
      <Clock cityObj={props.citiesObj[1]}/>
      <Clock cityObj={props.citiesObj[2]}/>

    </div>
  )
}


function Clock(props) {
 
let [count, setCount] = useState(0); 

useEffect(() => {
   function timer() {
     setTimeout (() => {
      setCount(count+=1);
      timer();
    },1000); 
  }
  timer();
}, []);
const cityRegion = props.cityObj.region + '/' + props.cityObj.city; 

  return (
    <div className="Clock">
        <h1>
          {props.cityObj.city}
        </h1>
        <h3>
          {moment().tz(cityRegion).format('LTS')}
          {/* {new Date().toLocaleTimeString()} */}
        </h3>
    </div>
  );
}


export default App;


